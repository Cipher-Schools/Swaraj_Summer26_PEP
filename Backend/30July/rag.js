"use strict";

const OLLAMA_URL = "http://ollama:11434";
const { v4: uuidv4 } = require("uuid");
// const pdfParse = require('pdf-parse');
const pdfParse = require("pdf-parse");
const CHUNK_SIZE = 500;
const OVERLAP = 100;
const CHAT_MODEL = "qwen3:8b";
const EMBED_MODEL = "nomic-embed-text";
const QDRANT_URL = "http://qdrant:6333";
const TOP_K = 5;
const COLLECTION_NAME = "pdf_chunks";
const VECTOR_DIM = 768;

async function parsePdf(buffer) {
  const result = await pdfParse(buffer);
  const text = result.text
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Remove control chars (keep \n, \r, \t)
    .replace(/-\r?\n\s*/g, "") // Join hyphenated words across lines
    .replace(/\r?\n+/g, " ") // Newlines -> space
    .replace(/\t+/g, " ") // Tabs -> space
    .replace(/\s{2,}/g, " ") // Collapse multiple spaces
    .trim();

  return { text, pages: result.numpages };
}

function chunkText(text, documentId, pages) {
  const word = text.split(" ").filter(Boolean);
  const steps = CHUNK_SIZE - OVERLAP;
  const chunks = [];

  for (let start = 0; start < word.length; start += steps) {
    const end = Math.min(start + CHUNK_SIZE, word.length);
    const chunkWord = word.slice(start, end);

    // Estimate Page Number
    const mid = start + Math.floor(chunkWord.length / 2);
    const pageNum = Math.max(1, Math.ceil(mid / word.length) * pages);

    chunks.push({
      chunkId: uuidv4(),
      documentId,
      pageNum,
      text: chunkWord.join(" "),
    });
  }

  return chunks;
}

async function embedData(chunk) {
  const res = await fetch(`${OLLAMA_URL}/api/embeddings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: EMBED_MODEL,
      prompt: chunk.text,
    }),
    signal: AbortSignal.timeout(120000),
  });

  const data = await res.json();
  if (!data.embedding) {
    throw new Error(`Embedding failed: ${JSON.stringify(data)}`);
  }

  return data.embedding;
}

async function ensureCollectionExists() {
  const check = await fetch(`${QDRANT_URL}/collections/${COLLECTION_NAME}`);
  if (check.status === 404) {
    {
      const res = await fetch(`${QDRANT_URL}/collections/${COLLECTION_NAME}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vectors: {
            size: VECTOR_DIM,
            distance: "Cosine",
          },
        }),
        signal: AbortSignal.timeout(120000),
      });

      if (res.status !== 200) {
        throw new Error(`Failed to create collection: ${errorData.message}`);
      }

      console.log(`Collection ${COLLECTION_NAME} created successfully.`);
    }
  }
}

async function storeChunksInQdrant(vectors, chunks) {
  const points = chunks.map((c, i) => {
    return {
      id: c.chunkId,
      vector: vectors[i],
      payload: {
        documentId: c.documentId,
        pageNum: c.pageNum,
        chunkText: c.text,
        chunkId: c.chunkId,
      }
    };
  });

  const res = await fetch(`${QDRANT_URL}/collections/${COLLECTION_NAME}/points`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ points }),
    signal: AbortSignal.timeout(120000),
  });

  console.log(res);

  if (res.status !== 200) {
    console.error(`Failed to store chunks in Qdrant`);
  }

  console.log(`Stored ${points.length} chunks in Qdrant successfully.`);
}

async function indexDocument(buffer, filename) {
  console.log(buffer);
  // This is for creating unique document id
  const documentId = uuidv4();

  // Parse Document - Extract Text
  const { text, pages } = await parsePdf(buffer);

  // Chunk Data
  const chunks = chunkText(text, documentId, pages);

  // Embed the chunk Data
  const vectors = [];
  for (const chunk of chunks) {
    const vector = await embedData(chunk);
    vectors.push(vector);
  }

  await ensureCollectionExists();
  await storeChunksInQdrant(vectors, chunks);

  // console.log(vectors[0], chunks[0]);
  return {
    documentId,
    filename,
    pages,
    totalChunks: chunks.length,
  }
}

async function askQuestions() {}

module.exports = {
  askQuestions,
  indexDocument,
};

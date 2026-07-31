"use strict";

const OLLAMA_URL = "http://ollama:11434";
const { v4: uuidv4 } = require("uuid");
// const pdfParse = require('pdf-parse');
const pdfParse = require("pdf-parse");
const CHUNK_SIZE = 500;
const OVERLAP = 100;
const CHAT_MODEL = "qwen3:8b";
const EMBED_MODEL = "nomic-embed-text";
const TOP_K = 5;

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
    const chuckWord = word.slice(start, end);

    // Extimate Page Number
    const mid = start + Math.floor(chuckWord.length / 2);
    const pageNum = Math.max(1, Math.ceil(mid / word.length) * pages);

    chunks.push({
      chuckId: uuidv4(),
      documentId,
      pageNum,
      text: chuckWord.join(" "),
    });
  }

  return chunks;
}

async function embedData(chunk) {
  const res = await fetch(`${OLLAMA_URL}/api/embed`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: EMBED_MODEL,
      input: chunk.text,
    }),
    signal: AbortSignal.timeout(120000),
  });

  const data = await res.json();
  return data;
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

  console.log(vectors[0], chunks[0]);
}

async function askQuestions() {}

module.exports = {
  askQuestions,
  indexDocument,
};

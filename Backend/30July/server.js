const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { indexDocument } = require("./rag");
const fs = require("fs");
const app = express();

app.post("/upload", upload.single("pdf"), async (req, res) => {
  //   console.log(req.file);

  if (!req.file) {
    res.send("Please upload any PFD file");
  }

  if (req.file.mimetype !== "application/pdf") {
    res.send("Please upload only PDF file");
  }

  try {
    const buffer = fs.readFileSync(req.file.path);

    // Rag fn to upload file - Fn Name is IndexDocument
    indexDocument(buffer, req.file.originalname);

    fs.unlinkSync(req.file.path);
  } catch (err) {
    res.send(`Unexpected Error Occured ${err}`);
  }

  res.send("File uploaded successfully");
});

app.listen(3000, () => console.log("Server is running on port 3000"));

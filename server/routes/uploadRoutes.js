const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Setup local storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save in /uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // e.g., 162851.jpg
  },
});

const upload = multer({ storage });

// POST /api/upload (for local storage)
router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.status(200).json({ url: `/uploads/${req.file.filename}` });
});

module.exports = router;

const express = require('express');
const router = express.Router();

// POST /api/contact
router.post('/', (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required' });
  }

  console.log('📩 New Contact Message:', { name, message });

  // Here you can:
  // 1. Save to DB
  // 2. Send an email
  // 3. Log to a file, etc.

  res.status(200).json({ success: true, message: 'Message received' });
});

module.exports = router;

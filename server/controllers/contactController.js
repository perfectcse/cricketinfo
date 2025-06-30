const Contact = require('../models/contactModel');

exports.submitContact = (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required' });
  }

  Contact.createContact({ name, message }, (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error', details: err });
    res.status(201).json({ message: 'Contact submitted successfully', id: result.insertId });
  });
};

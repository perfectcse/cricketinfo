const Stadium = require('../models/stadiumModel');

exports.getStadiums = (req, res) => {
  Stadium.getAll((err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch stadiums' });
    res.json(data);
  });
};

exports.addStadium = (req, res) => {
  Stadium.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to add stadium' });
    res.status(201).json({ message: 'Stadium added', id: result.insertId });
  });
};

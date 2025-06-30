const Player = require('../models/playerModel');

exports.getPlayers = (req, res) => {
  Player.getAllPlayers((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.createPlayer = (req, res) => {
  Player.createPlayer(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Player added', id: result.insertId });
  });
};

exports.deletePlayer = (req, res) => {
  Player.deletePlayer(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Player deleted' });
  });
};

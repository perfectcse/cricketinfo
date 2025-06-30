const db = require('../config/db');

exports.getAllPlayers = cb => {
  db.query('SELECT * FROM players', cb);
};

exports.createPlayer = (data, cb) => {
  db.query('INSERT INTO players SET ?', data, cb);
};

exports.deletePlayer = (id, cb) => {
  db.query('DELETE FROM players WHERE id = ?', [id], cb);
};

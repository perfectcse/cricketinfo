const db = require('../config/db');

exports.getAll = (cb) => {
  db.query('SELECT * FROM stadiums', cb);
};

exports.create = (data, cb) => {
  db.query('INSERT INTO stadiums SET ?', data, cb);
};

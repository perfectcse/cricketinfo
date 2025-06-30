const db = require('../config/db');

exports.createContact = (data, cb) => {
  const query = 'INSERT INTO contacts (name, message) VALUES (?, ?)';
  db.query(query, [data.name, data.message], cb);
};

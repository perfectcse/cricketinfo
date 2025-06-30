const db = require('../config/db');

exports.getAllBlogs = cb => {
  db.query('SELECT * FROM blogs', cb);
};

exports.createBlog = (data, cb) => {
  db.query('INSERT INTO blogs SET ?', data, cb);
};

exports.updateBlog = (id, data, cb) => {
  db.query('UPDATE blogs SET ? WHERE id = ?', [data, id], cb);
};

exports.deleteBlog = (id, cb) => {
  db.query('DELETE FROM blogs WHERE id = ?', [id], cb);
};

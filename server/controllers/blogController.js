const Blog = require('../models/blogModel');

exports.getBlogs = (req, res) => {
  Blog.getAllBlogs((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.createBlog = (req, res) => {
  Blog.createBlog(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Blog created', id: result.insertId });
  });
};

exports.updateBlog = (req, res) => {
  Blog.updateBlog(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Blog updated' });
  });
};

exports.deleteBlog = (req, res) => {
  Blog.deleteBlog(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Blog deleted' });
  });
};

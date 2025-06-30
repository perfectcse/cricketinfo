const express = require('express');
const router = express.Router();
const {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

router.get('/', getBlogs);         // ✅ Fetch all blogs
router.post('/', createBlog);      // ✅ Create new blog
router.put('/:id', updateBlog);    // ✅ Update blog by ID
router.delete('/:id', deleteBlog); // ✅ Delete blog by ID

module.exports = router;

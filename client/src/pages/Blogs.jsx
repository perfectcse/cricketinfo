import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogForm from "../components/BlogForm";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);

  // Fetch all blogs on mount
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Add or Update blog
  const handleSubmit = async (data) => {
    try {
      if (editBlog) {
        await axios.put(`http://localhost:5000/api/blogs/${editBlog.id}`, data);
      } else {
        await axios.post("http://localhost:5000/api/blogs", data);
      }
      fetchBlogs();
    } catch (err) {
      console.error("Failed to save blog:", err);
    }
  };

  // Delete blog
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error("Failed to delete blog:", err);
    }
  };

  return (
    <div className="blogs-page">
      <BlogForm onSubmit={handleSubmit} editBlog={editBlog} clearEdit={() => setEditBlog(null)} />

      <h2 className="blogs-heading">📚 Blog Posts</h2>
      <div className="blogs-grid">
        {blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} />}
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <p><strong>Author:</strong> {blog.author}</p>
              <div className="blog-actions">
                <button className="edit-btn" onClick={() => setEditBlog(blog)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(blog.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;

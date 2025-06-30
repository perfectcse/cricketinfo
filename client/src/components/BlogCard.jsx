import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog, onEdit, onDelete }) => {
  const defaultImg = "https://via.placeholder.com/300x180?text=No+Image";

  return (
    <div className="blog-card">
      <img
        src={blog.imageUrl || defaultImg}
        alt={blog.title}
        className="blog-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultImg;
        }}
      />
      <div className="blog-content">
        <h3>{blog.title}</h3>
        <p>{blog.content}</p>
        <p className="author">✍️ <strong>{blog.author}</strong></p>

        <div className="blog-actions">
          <button className="btn edit" onClick={() => onEdit(blog)}>
            ✏️ Edit
          </button>
          <button className="btn delete" onClick={() => onDelete(blog.id)}>
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

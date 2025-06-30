import React, { useState } from 'react';
import './BlogForm.css';

const BlogForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Please fill in all fields');
      return;
    }

    const blogData = { title, content, imageUrl };
    onSubmit(blogData);
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2>{initialData.id ? 'Edit Blog' : 'Add Blog'}</h2>

      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter blog title"
      />

      <label>Content</label>
      <textarea
        rows="6"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your blog content"
      />

      <label>Image URL</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Paste image URL or leave empty"
      />

      <button type="submit" className="btn">
        {initialData.id ? 'Update Blog' : 'Create Blog'}
      </button>
    </form>
  );
};

export default BlogForm;

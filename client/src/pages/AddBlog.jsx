import React from 'react';
import axios from 'axios';
import BlogForm from '../components/BlogForm';

const AddBlog = () => {
  const handleAddBlog = async (blogData) => {
    try {
      await axios.post('http://localhost:5000/api/blogs', blogData);
      alert('Blog successfully added!');
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  return (
    <div>
      <BlogForm onSubmit={handleAddBlog} />
    </div>
  );
};

export default AddBlog;

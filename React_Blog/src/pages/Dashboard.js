// src/pages/Dashboard.js
import React, { useState } from 'react';
import BlogList from '../components/Blog/BlogList';
import BlogForm from '../components/Blog/BlogForm';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs([...blogs, { ...blog, id: blogs.length + 1 }]);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <BlogForm onSubmit={addBlog} />
      <BlogList blogs={blogs} onDelete={deleteBlog} />
    </div>
  );
};

export default Dashboard;

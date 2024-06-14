// src/components/Blog/BlogItem.js
import React from 'react';

const BlogItem = ({ blog, onDelete }) => {
  return (
    <div className="blog-item">
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <button onClick={() => onDelete(blog.id)}>Delete</button>
    </div>
  );
};

export default BlogItem;

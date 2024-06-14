// src/components/Blog/BlogList.js
import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogs, onDelete }) => {
  return (
    <div>
      {blogs.map(blog => (
        <BlogItem key={blog.id} blog={blog} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BlogList;

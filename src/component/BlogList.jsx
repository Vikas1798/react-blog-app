import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ data }) => {
  return (
    <div>
      <h1> All Blogs.!</h1>
      {data.map((blog) => (
        <div className="blog-preview" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
           <p>Written by {blog.author}</p>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

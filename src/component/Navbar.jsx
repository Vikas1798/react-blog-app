import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Vikas Blogs</h1>
      <div className="links">
        <Link to="/" className="homebutton">Home</Link>
        <Link to="/newblog" className="newblogbutton">Add New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/crickflick.jpeg";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log("Search for:", searchTerm); // 🔍 Placeholder logic
      alert(`Searching for: ${searchTerm}`);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo + Title */}
      <div className="navbar-left">
        <img src={logo} alt="CrickFlick" className="logo-img" />
        <h1 className="site-title">CrickFlick</h1>
      </div>

      {/* Links */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/players">Players</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
        
      </div>

      {/* Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search players/blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="search-btn">🔍</button>
      </div>
    </nav>
  );
};

export default Navbar;

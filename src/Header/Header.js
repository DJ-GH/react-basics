import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo/Logo";
import { MdShoppingCart } from "react-icons/md";
const Header = () => {
  return (

    <header className="main-header">
      <div className="navbar">
        <div className="nav-start">
          <div className="nav-item"><Link to="/">Product</Link></div>
          <div className="nav-item"><Link to="/crypto">Crypto Price</Link></div>
          <div className="nav-item"><Link to="/news">News</Link></div>
        </div>

        <div className="nav-mid">
          <Link to="/"><Logo /></Link>
        </div>

        <div className="nav-end">
          <div className="nav-item"><Link to="/emoji">Emoji Finder</Link></div>
          <div className="nav-item"><Link to="/contact">Contact Us</Link></div>
          <div className="nav-item"><Link to="/about">About Us</Link></div>
        </div>
      </div>
      <div className="header-grad"></div>
    </header>

  );
};

export default Header;

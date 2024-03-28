// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Up() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <div className="headerLink">Home</div>
        </Link>
        <Link to="/popular">
          <div className="headerLink">Popular</div>
        </Link>
        <Link to="/reatin">
          <div className="headerLink">Reatin</div>
        </Link>
        <Link to="/tv">
          <div className="headerLink">Tv</div>
        </Link>
        <Link to="/upcoming">
          <div className="headerLink">Up Coming</div>
        </Link>
      </div>
    </header>
  );
}

export default Up;

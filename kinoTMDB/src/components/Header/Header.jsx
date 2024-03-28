import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputVal(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${inputVal}`);
    }
  };

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
        <input
          type="text"
          className="inputField"
          placeholder="Search..."
          value={inputVal}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </header>
  );
}

export default Header;

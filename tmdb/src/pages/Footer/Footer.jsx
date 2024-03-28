import React from "react";
import { Link } from "react-router-dom"; // Link komponentlerini import ediyoruz
import "./footer.css"; // footer.css stil dosyasını import ediyoruz

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <Link to="/" className="headerLink">
            Home
          </Link>
          <Link to="/popular" className="headerLink">
            Popular
          </Link>
          <Link to="/reatin" className="headerLink">
            Reatin
          </Link>
          <Link to="/tv" className="headerLink">
            Tv
          </Link>
          <Link to="/upcoming" className="headerLink">
            Up Coming
          </Link>
        </div>
        <div className="footer-bottom">
          &copy; 2024 Kino Sayt. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

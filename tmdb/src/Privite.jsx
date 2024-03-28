import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Popular } from "./pages/Popular/Popular";
import "./privite.css";
import Reatin from "./pages/Reatin/Reatin";
import Tv from "./pages/Tv-show/tv-show";
import Upcoming from "./pages/Upcomin/Upcomin";
import Footer from "./pages/Footer/Footer";

function Privite() {
  return (
    <>
      <div className="body">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/reatin" element={<Reatin />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Routes>
      <Footer />
      </div>
    </>
  );
}

export default Privite;

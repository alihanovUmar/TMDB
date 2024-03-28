import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [movis, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: { api_key: "53b602edf805615610b8990ce8bd24b6" },
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (

    
    <>
      <div className="container"></div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/Card/Card";
import "./popular.css";

export const Popular = () => {
  const [movies, setMovies] = useState([]);

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
      <div className="container">
        <h1>Popular</h1>
        <ul className="moviList">
          {movies.map((e) => (
            <Card item={e} />
          ))}
        </ul>
      </div>
    </>
  );
};

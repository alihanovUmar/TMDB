import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/Card/Card";

const Reatin = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: { api_key: "53b602edf805615610b8990ce8bd24b6" },
      })
      .then((res) => {
        if (res.data && res.data.results) {
          setMovies(res.data.results);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Home</h1>
        <ul className="moviList">
          {movies.map((e) => (
            <Card key={e.id} item={e} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reatin;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/Card/Card";
import Pagination from "@mui/material/Pagination";
import "tailwindcss/tailwind.css";

export const Reatin = () => {
  const [movies, setMovies] = useState({
    isLoading: true,
    isError: false,
    data: [],
    moviesPage: 1,
  });

  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: "53b602edf805615610b8990ce8bd24b6",
          page: activePage,
        },
      })
      .then((res) => {
        setMovies({
          isLoading: false,
          isError: false,
          data: res.data.results,
          moviesPage: res.data.total_pages > 500 ? 500 : res.data.total_pages,
        });
      })
      .catch((err) =>
        setMovies({
          isLoading: false,
          isError: true,
          data: [],
          moviesPage: 1,
        })
      );
  }, [activePage]);

  return (
    <>
      <div className="container">
        {movies.data.length > 0 && (
          <ul className="moviList">
            {movies.data.map((e) => (
              <Card key={e.id} item={e} />
            ))}
          </ul>
        )}
      </div>

      <div className="container">
        <Pagination
          onChange={(evt, page) => setActivePage(page)}
          count={movies.moviesPage}
          variant="outlined"
          shape="rounded"
          className="custom-pagination"
        />
      </div>
    </>
  );
};

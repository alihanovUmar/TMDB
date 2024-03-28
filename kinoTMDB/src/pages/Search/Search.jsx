import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/Card/Card";
import Pagination from "@mui/material/Pagination";
import { useParams } from "react-router-dom";

const Search = () => {
  const [activePage, setActivePage] = useState(1);
  const { name } = useParams();

  const [movies, setMovies] = useState({
    isLoading: true,
    isError: false,
    data: [],
    moviesPage: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              api_key: "53b602edf805615610b8990ce8bd24b6",
              page: activePage,
              query: name,
            },
          }
        );
        setMovies({
          isLoading: false,
          isError: false,
          data: response.data.results,
          moviesPage:
            response.data.total_pages > 500 ? 500 : response.data.total_pages,
        });
      } catch (error) {
        console.error("Error fetching search results:", error);
        setMovies({
          isLoading: false,
          isError: true,
          data: [],
          moviesPage: 1,
        });
      }
    };

    fetchData();
  }, [activePage, name]);

  return (
    <div className="container mx-auto p-8">
      {movies.isLoading ? (
        <h1 className="text-4xl text-white text-center bg-red-500 mt-8">
          Loading...
        </h1>
      ) : movies.isError ? (
        <p>Error fetching data.</p>
      ) : movies.data.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.data.map((e) => (
            <Card key={e.id} item={e} />
          ))}
        </ul>
      ) : (
        <div className="text-center mt-8 bg-red-500 py-6 rounded-lg flex justify-around items-center bg">
          <h2 className="  text-white text-2xl mb-4 ">
            Search by name: {name}
          </h2>
          <div className="w-[40%]">
            <h1 className="text-2xl text-white mb-4">No results found.</h1>
            <p className="text-lg text-gray-300 ">
              No movies matching the search term "{name}" were found. Please try
              searching for something else or check your spelling.
            </p>
          </div>
        </div>
      )}

      <Pagination
        count={movies.moviesPage}
        onChange={(event, page) => setActivePage(page)}
        variant="outlined"
        shape="rounded"
        className="mt-8"
      />
    </div>
  );
};

export default Search;

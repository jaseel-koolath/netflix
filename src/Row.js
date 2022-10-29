import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const imgURLbase = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchMovies() {
      const result = await axios.get(fetchURL);
      setMovies(result.data.results);
    }
    fetchMovies();
  }, [fetchURL]);
  //console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={
                  isLargeRow
                    ? imgURLbase + movie.poster_path
                    : imgURLbase + movie.backdrop_path
                }
                alt={movie?.name || movie?.title || movie?.original_name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;

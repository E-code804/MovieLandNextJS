"use client";

// React imports
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// API url
const apiURL = "http://www.omdbapi.com/?i=tt3896198&apikey=754cbab2";

const MoviePage = () => {
  const { movieTitle } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = () => {
      fetch(`${apiURL}&t=${movieTitle}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Bad Movie Title");
          }
          return res.json();
        })
        .then((obj) => {
          setMovie(obj);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [movieTitle]);

  return (
    <div className="app">
      <h1 id="hp-h1">Movie Page</h1>
      <h1 id="mp-h1">{movie.Title}</h1>

      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>
      </div>

      <div className="movie-details">
        <span>
          <h3>imdb Rating:</h3>
          {movie.imdbRating}
        </span>
        <span>
          <h3>Runtime:</h3>
          {movie.Runtime}
        </span>
        <span>
          <h3>Rated:</h3>
          {movie.Rated}
        </span>
        <span>
          <h3>Release:</h3>
          {movie.Released}
        </span>
      </div>
    </div>
  );
};

export default MoviePage;

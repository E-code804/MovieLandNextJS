"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import MovieCard from "./components/MovieCard";
import SearchIcon from "./search.svg";

const apiURL = "https://www.omdbapi.com/?i=tt3896198&apikey=754cbab2";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState("Batman");

  useEffect(() => {
    getMovies("Batman");
  }, []);

  const getMovies = async (title) => {
    const fetchData = () => {
      fetch(`${apiURL}&s=${title}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Bad Movie Title");
          }
          return res.json();
        })
        .then((obj) => {
          setMovies(obj.Search);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  };

  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className="search">
        <input
          placeholder="Search for a movie"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <Image
          src={SearchIcon}
          alt="Search"
          onClick={() => getMovies(movieTitle)}
        />
      </div>

      <div className="container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            year={movie.Year}
            poster={movie.Poster}
            title={movie.Title.replace(":", "")}
            type={movie.Type}
          />
        ))}
      </div>
    </div>
  );
}

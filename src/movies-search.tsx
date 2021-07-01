import React from "react";
import { Movie } from "./api";
import { MoviesList } from "./movies-list";
import { SearchForm } from "./search-form";

import "./movies-search.css";

const movies: Movie[] = [
  {
    title: "The Avengers",
    year: 2012,
    imdbID: "tt0848228",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    imdbID: "tt4154796",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
  {
    title: "Avengers: Infinity War",
    year: 2018,
    imdbID: "tt4154756",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    title: "Avengers: Age of Ultron",
    year: 2015,
    imdbID: "tt2395427",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    title: "The Avengers",
    year: 1998,
    imdbID: "tt0118661",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  },
  {
    title: "Ultimate Avengers: The Movie",
    year: 2006,
    imdbID: "tt0491703",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg",
  },
  {
    title: "Ultimate Avengers II",
    year: 2006,
    imdbID: "tt0803093",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    title: "Next Avengers: Heroes of Tomorrow",
    year: 2008,
    imdbID: "tt1259998",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQ3NjExNjY4N15BMl5BanBnXkFtZTcwNTczODkwNQ@@._V1_SX300.jpg",
  },
  {
    title: "Avengers Confidential: Black Widow & Punisher",
    year: 2014,
    imdbID: "tt3482378",
    // posterUrl:
    //   "https://m.media-amazon.com/images/M/MV5BMTU2MDg0Njk4MF5BMl5BanBnXkFtZTgwMTY0OTIyMTE@._V1_SX300.jpg",
  },
  {
    title: "Avengers Grimm",
    year: 2015,
    imdbID: "tt4296026",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTg5NDEzNDIyOV5BMl5BanBnXkFtZTgwODY3ODA5MzE@._V1_SX300.jpg",
  },
];

export const MoviesSearch: React.FC = () => {
  return (
    <div className="movies-search">
      <SearchForm onSearch={() => {}} />
      <MoviesList movies={movies} />
    </div>
  );
};

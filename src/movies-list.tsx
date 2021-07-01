import * as React from "react";
import { Movie } from "./api";

import "./movies-list.css";

export type MoviesListProps = {
  movies: Movie[];
};

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieItem key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
};

const noImagePath = "/no-image-available.png";

type MovieItemProps = Movie;

const MovieItem: React.FC<MovieItemProps> = ({ title, posterUrl, year }) => {
  return (
    <div className="movie-item">
      <div
        className="movie-item__image"
        style={{
          background: posterUrl
            ? `url(${posterUrl}) no-repeat center/cover`
            : `url(${noImagePath}) no-repeat center/contain`,
        }}
      />
      <div className="movie-item__description">
        <div className="movie-item__title">{title}</div>
        <div className="movie-item__year">{year}</div>
      </div>
    </div>
  );
};

import * as React from "react";

import "./movies-list.css";
import { Movie } from "./movies-resource";

export type MoviesListProps = {
  movies: Movie[];
  totalMovies: number;
};

export const MoviesList: React.FC<MoviesListProps> = ({
  movies,
  totalMovies,
}) => {
  const moreMoviesToShow = totalMovies - movies.length;
  return (
    <div className="movies-list">
      <div className="movies-list__grid">
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} {...movie} />
        ))}
      </div>
      {moreMoviesToShow > 0 ? (
        <div className="movies-list__show-more">
          and {moreMoviesToShow} movies more
        </div>
      ) : undefined}
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

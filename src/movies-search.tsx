import * as React from "react";

import { SearchParams, useMoviesSearch } from "./movies-resource";
import { MoviesList } from "./movies-list";
import { SearchForm } from "./search-form";

import "./movies-search.css";

export const MoviesSearch: React.FC = () => {
  const [searchParams, setSearchParams] = React.useState<SearchParams>();

  const moviesResource = useMoviesSearch(searchParams ?? { title: "" });

  return (
    <div className="movies-search">
      <SearchForm onSearch={setSearchParams} />
      {(() => {
        if (moviesResource.isLoading) {
          return <div className="movies-search__message">Loading</div>;
        }
        if (moviesResource.error) {
          return (
            <div className="movies-search__message">Something went wrong</div>
          );
        }
        if (moviesResource.data?.totalMovies === 0) {
          return (
            <div className="movies-search__message">No movies found :(</div>
          );
        }
        return (
          <MoviesList
            movies={moviesResource.data?.movies ?? []}
            totalMovies={moviesResource.data?.totalMovies ?? 0}
          />
        );
      })()}
    </div>
  );
};

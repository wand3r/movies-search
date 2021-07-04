import * as React from "react";

import { SearchParams, useMoviesSearch } from "./movies-resource";
import { MoviesList } from "./movies-list";
import { SearchForm } from "./search-form";

import "./movies-search.css";
import { uniq } from "./utils";

export const MoviesSearch: React.FC = () => {
  const [searchParams, setSearchParams] = React.useState<SearchParams>();

  const { isLoading, error, data } = useMoviesSearch(
    searchParams ?? { title: "" }
  );

  const years = uniq(data?.movies.map((x) => x.year) ?? []);

  return (
    <div className="movies-search">
      <SearchForm onSearch={setSearchParams} years={years} />
      {(() => {
        if (isLoading) {
          return <div className="movies-search__message">Loading</div>;
        }
        if (error) {
          return (
            <div className="movies-search__message">Something went wrong</div>
          );
        }
        if (data?.totalMovies === 0) {
          return (
            <div className="movies-search__message">No movies found :(</div>
          );
        }
        return (
          <MoviesList
            movies={data?.movies ?? []}
            totalMovies={data?.totalMovies ?? 0}
          />
        );
      })()}
    </div>
  );
};

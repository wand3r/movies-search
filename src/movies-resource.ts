import { useQuery } from "react-query";
import { OMDbMovie, searchMovies } from "./omdb-api";

export type SearchParams = {
  title: string;
  year?: number;
};

export type Movie = {
  imdbID: string;
  title: string;
  year: number;
  posterUrl?: string;
};

export type MoviesSearchResult = {
  totalMovies: number;
  movies: Movie[];
};

export const useMoviesSearch = ({ title, year }: SearchParams) => {
  const result = useQuery<MoviesSearchResult>(
    ["movies", title, year],
    async () => {
      // For now we ignore paging and always use only first page
      const response = await searchMovies({ title, year, page: 1 });
      // Response === "False" means that no movies were found so we can just return empty array
      if (response.Response === "False") return { totalMovies: 0, movies: [] };
      return {
        totalMovies: Number(response.totalResults),
        movies: response.Search.map(mapOMDbMovie),
      };
    },
    { enabled: title.length > 2 }
  );
  return result;
};

const mapOMDbMovie = (omdbMovie: OMDbMovie): Movie => {
  return {
    imdbID: omdbMovie.imdbID,
    title: omdbMovie.Title,
    year: parseInt(omdbMovie.Year, 10),
    posterUrl: omdbMovie.Poster !== "N/A" ? omdbMovie.Poster : undefined,
  };
};

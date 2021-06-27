export type SearchParams = {
  title: string;
  page: number;
  year?: number;
};

export type SearchResult =
  | {
      type: "success";
      movies: Movie[];
      page: number;
      totalPages: number;
    }
  | {
      type: "movies-not-found";
    }
  | {
      type: "error";
    };

export type Movie = {
  imdbID: string;
  title: string;
  year: number;
  posterUrl?: string;
};

const apiBaseUrl = "http://www.omdbapi.com";

const pageSize = 10;

export const searchMovies = async ({
  title,
  year,
  page,
}: SearchParams): Promise<SearchResult> => {
  const urlSearchParams = new URLSearchParams({
    apikey: import.meta.env.VITE_API_KEY,
    s: title,
    page: page.toString(),
    type: "movie",
  });

  if (year != null) {
    urlSearchParams.append("y", year.toString());
  }

  const url = `${apiBaseUrl}?${urlSearchParams.toString()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(response);
      return {
        type: "error",
      };
    }

    const omdbResponse: OMDbResponse = await response.json();

    if (omdbResponse.Response === "False") {
      return {
        type: "movies-not-found",
      };
    }

    const result: SearchResult = {
      type: "success",
      movies: omdbResponse.Search.map(mapOMDbMovie),
      page,
      totalPages: getTotalPages(
        parseInt(omdbResponse.totalResults, 10),
        pageSize
      ),
    };

    return result;
  } catch (error) {
    console.error(error);
    return {
      type: "error",
    };
  }
};

const getTotalPages = (totalResults: number, pageSize: number): number => {
  return Math.ceil(totalResults / pageSize);
};

const mapOMDbMovie = (omdbMovie: OMDbMovie): Movie => {
  return {
    imdbID: omdbMovie.imdbID,
    title: omdbMovie.Title,
    year: parseInt(omdbMovie.Year, 10),
    posterUrl: omdbMovie.Poster !== "N/A" ? omdbMovie.Poster : undefined,
  };
};

type OMDbResponse =
  | {
      Response: "True";
      Search: OMDbMovie[];
      totalResults: string;
    }
  | {
      Response: "False";
      Error: string;
    };

type OMDbMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

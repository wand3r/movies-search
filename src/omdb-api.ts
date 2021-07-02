export type SearchParams = {
  title: string;
  page: number;
  year?: number;
};

export type OMDbResponse =
  | {
      Response: "True";
      Search: OMDbMovie[];
      totalResults: string;
    }
  | {
      Response: "False";
      Error: string;
    };

export type OMDbMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

const apiBaseUrl = "http://www.omdbapi.com";

export const searchMovies = async ({
  title,
  year,
  page,
}: SearchParams): Promise<OMDbResponse> => {
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

  const response = await fetch(url);

  if (!response.ok) {
    throw Error(await response.text());
  }

  const omdbResponse: OMDbResponse = await response.json();

  return omdbResponse;
};

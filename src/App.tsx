import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MoviesSearch } from "./movies-search";

import "./app.css";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesSearch />
    </QueryClientProvider>
  );
};

import * as React from "react";

import "./search-form.css";

export type SearchFormProps = {
  onSearch: (params: { title: string; year?: number }) => void;
};

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState<number | undefined>(undefined);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setYear(e.currentTarget.value ? Number(e.currentTarget.value) : undefined);
  };

  const handleSearch = () => {
    onSearch({ title, year });
  };

  const handleClear = () => {
    setTitle("");
    setYear(undefined);
  };

  return (
    <div className="search-form">
      <input
        className="search-form__title"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        className="search-form__year"
        type="number"
        placeholder="Year"
        value={year != null ? year : ""}
        onChange={handleYearChange}
      />
      <button className="search-form__search-button" onClick={handleSearch}>
        Search
      </button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

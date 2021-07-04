import * as React from "react";
import { minTitleLength } from "./movies-resource";

import "./search-form.css";

export type SearchFormProps = {
  years?: number[];
  onSearch: (params: { title: string; year?: number }) => void;
};

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch, years }) => {
  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState<number | undefined>(undefined);
  const titleInputRef = React.useRef<HTMLInputElement | null>(null);

  const isSearchEnabled = title.length >= minTitleLength;
  const isClearEnabled = title.length > 0 || year !== undefined;

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
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      onSearch({ title, year });
    }
  };

  return (
    <div className="search-form">
      <input
        ref={titleInputRef}
        className="search-form__title"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        onKeyPress={handleKeyPress}
      />
      <input
        className="search-form__year"
        list="existing-years"
        type="number"
        placeholder="Year"
        value={year != null ? year : ""}
        onChange={handleYearChange}
        onKeyPress={handleKeyPress}
      />
      <datalist id="existing-years">
        {years?.map((year) => (
          <option key={year}>{year}</option>
        ))}
      </datalist>
      <button
        className="search-form__search-button"
        onClick={handleSearch}
        disabled={!isSearchEnabled}
      >
        Search
      </button>
      <button onClick={handleClear} disabled={!isClearEnabled}>
        Clear
      </button>
    </div>
  );
};

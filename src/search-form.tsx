import * as React from "react";

import "./search-form.css";

export type SearchFormProps = {
  onSearch: (params: { title: string; year?: number }) => void;
};

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState<number | undefined>(undefined);
  const titleInputRef = React.useRef<HTMLInputElement | null>(null);

  const isSearchEnabled = title.length > 2;
  const isClearEnabled = title.length > 0 && year !== undefined;

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
        type="number"
        placeholder="Year"
        value={year != null ? year : ""}
        onChange={handleYearChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="search-form__search-button"
        onClick={handleSearch}
        disabled={!isSearchEnabled}
      >
        Search
      </button>
      <button onClick={handleClear} disabled={!isSearchEnabled}>
        Clear
      </button>
    </div>
  );
};

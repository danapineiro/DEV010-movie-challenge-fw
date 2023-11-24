import React from "react";
// import "./Search.css";

interface Props {
  searchInput(e: React.FormEvent<HTMLInputElement>): void;
  search(e: React.KeyboardEvent<HTMLInputElement>): void;
}

function Search(props: Props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Find Your Favorite Movie..."
        className="search"
        onChange={props.searchInput}
        onKeyPress={props.search}
      />
    </div>
  );
}

export default Search;
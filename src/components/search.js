import React from "react";

const Search = ({ search, handleChangeSearch }) => {
  return (
    <div className="search">
      <label>Name coin</label>
      <input value={search} onChange={handleChangeSearch} placeholder="Enter the name of the coin..." />
    </div>
  );
};

export { Search };

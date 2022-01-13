import React from 'react';

interface Props {
  search: string;
  handleChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ search, handleChangeSearch }) => (
  <div className="search">
    <label>Name coin</label>
    <input value={search} onChange={handleChangeSearch} placeholder="Enter the name of the coin..." />
  </div>
);

export { Search };

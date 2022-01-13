import React from 'react';
import { SORTED_ITEMS } from 'Constants';
import _map from 'lodash/map';

interface Props {
  selectSort: string;
  handleChangeSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Sort: React.FC<Props> = ({ selectSort, handleChangeSort }) => {
  const OPTION_ITEMS: JSX.Element[] = _map(SORTED_ITEMS, (sortemItem) => (
    <option key={sortemItem} value={sortemItem}>
      {sortemItem}
    </option>
  ));

  return (
    <div className="sort">
      <label>Soring by current price</label>
      <select value={selectSort} onChange={handleChangeSort}>
        {OPTION_ITEMS}
      </select>
    </div>
  );
};

export { Sort };

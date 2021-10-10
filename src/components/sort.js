import React from "react";
import { SORTED_ITEMS } from "Constants";

const Sort = ({ selectSort, handleChangeSort }) => {
  const optionItems = SORTED_ITEMS.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <div className="sort">
      <label>Soring by current price</label>
      <select value={selectSort} onChange={handleChangeSort}>
        {optionItems}
      </select>
    </div>
  );
};

export { Sort };

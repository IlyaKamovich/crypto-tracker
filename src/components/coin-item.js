import React from "react";
import classnames from "classnames";
import { isInteger } from "lodash";
import { CoinImg } from "Components";

const CoinItem = ({ index, name, price, priceChange, volume, marketcap, symbol, image }) => {
  const priceChangeClassNames = classnames({
    "coins__content-item__price-change": true,
    green: priceChange > 0,
    red: true,
  });

  return (
    <div className="coins__content-item">
      <p className="coins__content-item__id">{index + 1}</p>
      <CoinImg alt={image} src={image} />
      <p className="coins__content-item__name">{name}</p>
      <p className="coins__content-item__symbol">{symbol}</p>
      <p className="coins__content-item__price">{isInteger(price) ? price : parseFloat(price)} $</p>
      <p className="coins__content-item__volume">{volume.toLocaleString("en-US")} $</p>
      <p className="coins__content-item__marketcap">{marketcap.toLocaleString("en-US")} $</p>
      <p className={priceChangeClassNames}>{priceChange.toFixed(2)} %</p>
    </div>
  );
};

export { CoinItem };

import React from "react";
import { CoinImg } from "Components";
import coinHeader from "Assets/coin-header.png";

const CoinHeader = () => {
  return (
    <div className="coins__content-item">
      <p className="coins__content-item__id">#</p>
      <CoinImg alt={coinHeader} src={coinHeader} />
      <p className="coins__content-item__name">Name</p>
      <p className="coins__content-item__symbol">Symbol</p>
      <p className="coins__content-item__price">Price, $</p>
      <p className="coins__content-item__volume">24h Volume, $</p>
      <p className="coins__content-item__marketcap">Mkt Cap, $</p>
      <p className="coins__content-item__price-change">Сhange, %</p>
    </div>
  );
};

export { CoinHeader };

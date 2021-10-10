import React, { useEffect, Fragment } from "react";
import { useFetch } from "Hooks";
import { Error, Loading, CoinList } from "Components";

import "Styles/_coins.scss";

const END_POINT = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

const Coins = () => {
  const [loading, data, error, getDataAsync] = useFetch(END_POINT);

  useEffect(() => {
    getDataAsync(END_POINT);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Fragment>
      <CoinList coins={data} />
    </Fragment>
  );
};

export { Coins };

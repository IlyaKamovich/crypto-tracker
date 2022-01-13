import React, { useEffect } from 'react';
import { Loading, Error, CoinContainer } from 'Components';
import { END_POINT, SORT_KEY } from 'Constants';
import { useFetch } from 'Hooks';

const Coins: React.FC = () => {
  const { loading, coins, error, errorMessage, getDataAsync } = useFetch(END_POINT);

  useEffect(() => {
    getDataAsync(END_POINT);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={errorMessage} />;
  }

  return <CoinContainer coins={coins} sortKey={SORT_KEY} />;
};

export { Coins };

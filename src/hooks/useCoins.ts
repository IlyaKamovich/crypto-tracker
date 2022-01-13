import { API_INTERVAL } from 'Constants';
import { ICoin, IUseFetch } from 'Models';
import { useState, useEffect } from 'react';

const useFetch = (apiUrl: string): IUseFetch => {
  const [loading, setLoading] = useState<boolean>(true);
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      getDataAsync(apiUrl);
    }, API_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getDataAsync = async (url: string): Promise<void> => {
    try {
      const response = await fetch(url);
      const data: ICoin[] = await response.json();
      setError(false);
      setErrorMessage('');
      setCoins(data);
      setLoading(false);
    } catch (e: any) {
      setError(true);
      setErrorMessage(e.message);
      setLoading(false);
    }
  };

  return { loading, coins, error, errorMessage, getDataAsync };
};

export { useFetch };

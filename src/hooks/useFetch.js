import { useState, useEffect } from "react";

const API_INTERVAL = 60000;

const useFetch = (apiUrl) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      getDataAsync(apiUrl);
    }, API_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getDataAsync = async (url) => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setError(false);
      setData(data);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  return [loading, data, error, getDataAsync];
};

export { useFetch };

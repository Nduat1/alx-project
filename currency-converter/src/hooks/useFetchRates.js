import { useState, useEffect } from 'react';

const useFetchRates = (apiKey) => {
  const [rates, setRates] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
        const data = await response.json();
        if (data.result === "success") {
          setRates(data.conversion_rates);
          setCurrencies(Object.keys(data.conversion_rates));
        } else {
          throw new Error("Failed to fetch rates");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRates();
  }, [apiKey]);

  return { rates, currencies, error };
};

export default useFetchRates;

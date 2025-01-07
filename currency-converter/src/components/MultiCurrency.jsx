import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MultiCurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [currencies, setCurrencies] = useState([]);
  const [conversionRates, setConversionRates] = useState({});
  const [convertedValues, setConvertedValues] = useState([]);

  const API_KEY = '21c758ae569c89f5e75ae5e9';
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

  useEffect(() => {
    // Fetch the list of supported currencies
    axios
      .get(`${API_URL}/codes`)
      .then((response) => {
        const currencyCodes = response.data.supported_codes.map((code) => code[0]);
        setCurrencies(currencyCodes);
      })
      .catch((error) => console.error('Error fetching currency codes:', error));
  }, []);

  const fetchConversionRates = () => {
    if (amount && baseCurrency) {
      axios
        .get(`${API_URL}/latest/${baseCurrency}`)
        .then((response) => {
          setConversionRates(response.data.conversion_rates);
        })
        .catch((error) => console.error('Error fetching conversion rates:', error));
    }
  };

  const handleConvert = () => {
    if (Object.keys(conversionRates).length) {
      const results = currencies.map((currency) => ({
        currency,
        value: (conversionRates[currency] * parseFloat(amount)).toFixed(2),
      }));
      setConvertedValues(results);
    }
  };

  useEffect(() => {
    fetchConversionRates();
  }, [baseCurrency]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-7 text-gray-900 dark:text-white text-center">Multi-Currency Converter</h2>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Base Currency:</label>
        <select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleConvert}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
      >
        Convert
      </button>
      {convertedValues.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Converted Values:</h3>
          <ul className="mt-2">
            {convertedValues.map(({ currency, value }) => (
              <li key={currency} className="text-gray-700 dark:text-gray-300">
                {currency}: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiCurrencyConverter;

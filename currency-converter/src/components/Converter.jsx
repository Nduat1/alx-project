import React, { useState } from "react";
import useFetchRates from "../hooks/useFetchRates";
import Dropdown from "./Dropdown";
import useLocalStorage from "../hooks/useLocalStorage";

const API_KEY = "21c758ae569c89f5e75ae5e9";

const Converter = () => {
  const { rates, currencies } = useFetchRates(API_KEY);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KES");
  const [favoritePair, setFavoritePair] = useLocalStorage("favoritePair", []);
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    if (fromCurrency && toCurrency && rates[fromCurrency] && rates[toCurrency]) {
      const rate = rates[toCurrency] / rates[fromCurrency];
      setResult((amount * rate).toFixed(2));
    }
  };

  const handleSave = () => {
    const newPair = { fromCurrency, toCurrency };
    if (!favoritePair.some(pair => 
      pair.fromCurrency === newPair.fromCurrency && 
      pair.toCurrency === newPair.toCurrency)) {
      setFavoritePair([...favoritePair, newPair]);
      alert("Favorite pair saved!");
    } else {
      alert("This pair is already saved.");
    }
  };

  return (
    <div className="p-14 dark:bg-gray-800 rounded-md shadow-md">
      <div className="flex flex-col gap-8 m-8">
        <div className="flex gap-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded px-3 py-2 w-4/5"
            placeholder="Amount"
          />
          <Dropdown
            currencies={currencies}
            selectedCurrency={fromCurrency}
            onChange={setFromCurrency}
          />
          <Dropdown
            currencies={currencies}
            selectedCurrency={toCurrency}
            onChange={setToCurrency}
          />
        </div>

        <button
          onClick={handleConvert}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Convert
        </button>
        <button
          onClick={handleSave}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Save to Favorite
        </button>
        {result && (
          <p className="mt-4 text-lg text-white">
            {amount} {fromCurrency} = {result} {toCurrency}
          </p>
        )}
      </div>
    </div>
  );
};

export default Converter;

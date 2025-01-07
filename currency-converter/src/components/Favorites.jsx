import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Favorites = ({ setFromCurrency, setToCurrency }) => {
  const [favoritePair, setFavoritePair] = useLocalStorage("favoritePair", []); 

  const useFavoritePair = (pair) => {
    setFromCurrency(pair.fromCurrency);
    setToCurrency(pair.toCurrency);
  };

  const deleteFavoritePair = (pairToDelete) => {
    const updatedPairs = favoritePair.filter(
      (pair) =>
        pair.fromCurrency !== pairToDelete.fromCurrency ||
        pair.toCurrency !== pairToDelete.toCurrency
    );
    setFavoritePair(updatedPairs);
  };
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-2xl font-bold dark:text-white mb-7 text-center">
        Favorites</h1>
      {favoritePair.length > 0 ? (
        <ul>
        {favoritePair.map((pair, index) => (
          <li key={index} className="text-white font-semibold ml-4">
            {pair.fromCurrency} → {pair.toCurrency}
            <button
              onClick={() => useFavoritePair(pair)}
              className="bg-primary text-white px-4 py-2 m-7 rounded hover:bg-secondary"
            >
              Use
            </button>
            <button
              onClick={() => deleteFavoritePair(pair)}
              className='bg-primary text-white px-4 py-2 rounded hover:bg-secondary m-7'
            >
              Delete
            </button>
            
          </li>
        ))}
      </ul>
      ) : (
        <p className="mt-4 dark:text-white">No favorite pairs saved.</p>
      )}
    </div>
  );
};

export default Favorites;

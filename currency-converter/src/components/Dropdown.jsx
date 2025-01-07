import React from "react";

const CurrencyDropdown = ({ currencies, selectedCurrency, onChange }) => (
  <select
    value={selectedCurrency}
    onChange={(e) => onChange(e.target.value)}
    className="border border-gray-300 rounded-md p-2"
  >
    {currencies.map((currency) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ))}
  </select>
);

export default CurrencyDropdown;

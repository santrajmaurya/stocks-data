import React, { useState } from "react";
import "./index.css";

export default function StockData() {
  const [socketData, setSocketData] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchStr(searchValue);
  };

  const searchStocks = () => {
    fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${searchStr}`)
      .then((response) => response.json())
      .then((data) => setSocketData(data));
  };

  const { data } = socketData;

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="text"
          className="large"
          placeholder="5-January-2000"
          id="app-input"
          data-testid="app-input"
          onChange={handleSearch}
        />
        <button
          className=""
          id="submit-button"
          data-testid="submit-button"
          onClick={searchStocks}
        >
          Search
        </button>
      </section>
      {data?.map((item) => (
        <ul
          key={item.date}
          className="mt-50 slide-up-fade-in styled"
          id="stockData"
          data-testid="stock-data"
        >
          <li className="py-10">Open: {item.open} </li>
          <li className="py-10">Close: {item.close}</li>
          <li className="py-10">High: {item.high}</li>
          <li className="py-10">Low: {item.low}</li>
        </ul>
      ))}
      {socketData?.data?.length === 0 && (
        <div
          className="mt-50 slide-up-fade-in"
          id="no-result"
          data-testid="no-result"
        >
          <h3>No Results Found</h3>
        </div>
      )}
    </div>
  );
}

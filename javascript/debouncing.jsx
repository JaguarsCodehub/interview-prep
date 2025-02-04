import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { useState, useEffect } from "react";

function useDebounce(cb, delay) {
  const [debounceValue, setDebounceValue] = useState(cb);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(cb);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [cb, delay]);
  return debounceValue;
}

export const App = () => {
  const [searchVal, setSearchVal] = useState("");
  const [debounceVal, setDebounceVal] = useState("");

  const debounceValue = useDebounce(searchVal, 2000);

  useEffect(() => {
    console.log("Debounced:", searchVal);
    setDebounceVal(searchVal);
  }, [debounceValue]);

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <div className="App">
      <h1>Debounce</h1>
      <div className="container">
        <div className="search-input">
          <input type="text" value={searchVal} onChange={handleChange} />
        </div>
        <div className="search-data">{debounceVal}</div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

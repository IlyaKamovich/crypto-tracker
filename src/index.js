import React, { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./app";

const CryptoTracker = () => {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

const rootElement = document.getElementById("crypto-tracker");
render(<CryptoTracker />, rootElement);

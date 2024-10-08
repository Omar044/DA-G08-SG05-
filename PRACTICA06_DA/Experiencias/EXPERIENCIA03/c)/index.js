// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import MainComponent from "./MainComponent"; 
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainComponent /> {}
  </React.StrictMode>
);

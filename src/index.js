import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Ensure that the DOM element with ID "root" exists before attempting to render
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.render(<App />, rootElement);
} else {
  console.error('Could not find element with ID "root"');
}

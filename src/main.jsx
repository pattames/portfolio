import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import LangContextProvider from "./context/LangContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </LangContextProvider>
  </React.StrictMode>
);

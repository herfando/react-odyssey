import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Cari <div id="root"></div> di index.html lalu render App
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

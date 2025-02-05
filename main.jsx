import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Verifique se o caminho está correto
import "./index.css"; // Se houver um arquivo de estilos global

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
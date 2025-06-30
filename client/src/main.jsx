import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// ✅ Global styles
import "./styles/Global.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

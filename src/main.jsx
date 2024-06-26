import React from "react";
import ReactDOM from "react-dom/client";
import { appRouter } from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

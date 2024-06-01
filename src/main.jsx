import React from "react";
import ReactDOM from "react-dom/client";
import { appRouter } from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </RouterProvider>
  </React.StrictMode>
);

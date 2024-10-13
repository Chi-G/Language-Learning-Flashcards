import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './contexts/authContext'; // Import the AuthProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider> {/* Wrap the App in the AuthProvider */}
      <App />
    </AuthProvider>
  </BrowserRouter>
);

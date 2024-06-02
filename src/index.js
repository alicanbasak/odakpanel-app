import "./index.css";
import App from "./App";
import { AuthProvider } from "react-auth-kit";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider authType={"cookie"} authName={"_auth"}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </AuthProvider>
);

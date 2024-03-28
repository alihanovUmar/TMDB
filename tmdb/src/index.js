import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvaider } from "./context/AuthContext";
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvaider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvaider>
  </React.StrictMode>
);
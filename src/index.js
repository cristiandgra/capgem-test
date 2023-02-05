/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Footer } from "./components/footer/footer.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

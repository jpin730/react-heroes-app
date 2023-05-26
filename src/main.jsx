import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { HeroesApp } from "./HeroesApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.PROD ? "/react-heroes-app" : "/"}>
    <React.StrictMode>
      <HeroesApp />
    </React.StrictMode>
  </BrowserRouter>
);

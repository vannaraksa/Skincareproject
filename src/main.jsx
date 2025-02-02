import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home.jsx";
import Product from "./page/Product.jsx";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

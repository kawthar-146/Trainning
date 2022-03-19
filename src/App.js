import React from "react";
// import Header from "./components/header.js"
import Header from "./components/layout/Header";
import Slider from "./components/layout/slider";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/layout/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Slider2 from "./components/layout/slider2";
import Products from "./components/layout/products";
import Cosmetic from "./components/layout/Cosmetic";
import Product2 from "./components/layout/product2";
import Quotes from "./components/layout/quotes";
import CosmeticNew from "./components/layout/Cosmeticnew";
import Followus from "./components/layout/FollowUs";
import Footer from "./components/layout/Footer";
export const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <About />
      <Slider2 />
      <Products />
      <Cosmetic />
      <Product2 />
      <Quotes />
      <CosmeticNew/>
      <Followus />
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

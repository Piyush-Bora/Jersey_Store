import './App.css';
import React, { useState } from 'react';
// import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form';
import ProdDesc from './components/ProdDesc';
import AllProducts from './components/AllProducts';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/form" element={<Form />} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/proddesc/:id" element={<ProdDesc />} />
      <Route path="/about" element={<About />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
// import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form';
import ProdDesc from './components/ProdDesc';

function App() {
  
  const [navOpen, setNav] = useState('true');

    const toggleNav = () => {
        if (navOpen === 'false') {
            setNav('true');
        }
        else {
            setNav('false');
        }
    }
  return (
    <>
    <BrowserRouter>
    <Navbar mode={navOpen} toggleNavBar={toggleNav} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/products" element={<ProdDesc />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

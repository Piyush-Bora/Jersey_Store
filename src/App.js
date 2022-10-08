import './App.css';
import React, { useState } from 'react';
// import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form';

function App() {
  
  const [navOpen, setNav] = useState('false');

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
    <Navbar mode={navOpen} toggleNavBar={toggleNav} />
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
//import App from './App';
import Home from './pages/Home';
import Help from './pages/Help';
import Characters from './pages/Characters';
import About from './pages/About';
import SignUp from './pages/SignUp';
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/help" element={<Help />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>,
);

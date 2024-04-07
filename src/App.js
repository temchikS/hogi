// В App.js

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from './components/Reg';
import WelcomePage from './components/Welcome';
import LoginPage from './components/Login';
import Americaya from './components/americaya';

function App() {
  const [showHalo, setShowHalo] = useState(false);

  const handleClick = () => {
    setShowHalo(true);
    setTimeout(() => {
      setShowHalo(false);
    }, 3000);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/reg" element={<RegistrationPage/>}/>
        <Route path="/welcome" element={<WelcomePage/>}/>
      </Routes>
      <Americaya handleClick={handleClick} showHalo={showHalo} />
    </>
  );
}

export default App;

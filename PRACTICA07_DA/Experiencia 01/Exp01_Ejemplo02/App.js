
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/" element={<HomeScreen />} /> {/* Redirección a Home si no hay ruta especificada */}
      </Routes>
    </div>
  );
};

export default App;

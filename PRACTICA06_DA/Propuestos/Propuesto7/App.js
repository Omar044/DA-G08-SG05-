import React, { useState } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido al Equipo de Fútbol BARCELONA</h1>
        <img src="barsaa.png" alt="Escudo del Equipo" />
        <p className="introduce-nombre">Introduce tu nombre:</p>
        <input 
          type="text" 
          value={nombre} 
          onChange={handleInputChange} 
          className="nombre-input" 
          placeholder="Escribe tu nombre aquí" 
        />
        <p className="saludo">Hola, {nombre}!</p>
      </header>
    </div>
  );
}

export default App;

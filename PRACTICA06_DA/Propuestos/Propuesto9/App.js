import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    setJugadores(['Lionel Messi', 'Gerard Piqué', 'Sergio Busquets']);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Equipo de Fútbol BARCELONA</h1>
        <img src="barsaa.png" alt="Escudo del Equipo" />
        <p className="titulo-jugadores">Jugadores:</p>
        <ul>
          {jugadores.map((jugador, index) => (
            <li key={index}>{jugador}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;


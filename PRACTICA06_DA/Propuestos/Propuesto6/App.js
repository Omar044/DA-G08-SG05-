import React, { useState } from 'react';
import './App.css';
import Jugador from './Jugador.jsx';

function App() {
  const [jugadores, setJugadores] = useState([
    { nombre: 'Lionel Messi', posicion: 'Delantero', edad: 34 },
    { nombre: 'Gerard Piqué', posicion: 'Defensa', edad: 34 },
    { nombre: 'Sergio Busquets', posicion: 'Centrocampista', edad: 32 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Equipo de Fútbol BARCELONA</h1>
        <img src="barsa.png" alt="Escudo del Equipo" />
        <p>Jugadores Destacados:</p>
      </header>
      <div>
        {jugadores.map((jugador, index) => (
          <Jugador key={index} nombre={jugador.nombre} posicion={jugador.posicion} edad={jugador.edad} />
        ))}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Jugador from './Jugador.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Equipo de Fútbol BARCELONA</h1>
        <img src="barsaa.png" alt="Escudo del Equipo" />
        <p>Jugadores Destacados:</p>
      </header>
      <div>
        <Jugador nombre="Lionel Messi" posicion="Delantero" />
        <Jugador nombre="Gerard Piqué" posicion="Defensa" />
        <Jugador nombre="Sergio Busquets" posicion="Centrocampista" />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Equipo de Fútbol BARCELONA</h1>
        <img src="barsaa.png" alt="Escudo del Equipo" />
        <p>Bienvenido al sitio oficial del Equipo de Fútbol BARCELONA.</p>
      </header>
      <div>
        <h2>Estadísticas de Jugadores</h2>
        <ul>
          <li>
            <a href="url-estadisticas-jugador1.com" target="_blank" rel="noopener noreferrer">
              MESSI
            </a>
          </li>
          <li>
            <a href="url-estadisticas-jugador2.com" target="_blank" rel="noopener noreferrer">
              JORDI ALBA
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

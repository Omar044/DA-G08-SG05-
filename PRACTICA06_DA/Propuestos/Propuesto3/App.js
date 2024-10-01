import React from 'react';
import './App.css';
import Jugador from './Jugador.jsx'; // Importa el componente correctamente

function App() {
  const jugadores = [
    { nombre: 'Ronaldinho', posicion: 'Delantero' },
    { nombre: 'Jordi Alba', posicion: 'Defensor' },
  ];

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
          <li><a href="url-estadisticas-jugador1.com" target="_blank" rel="noopener noreferrer">MESSI</a></li>
          <li><a href="url-estadisticas-jugador2.com" target="_blank" rel="noopener noreferrer">JORDI ALBA</a></li>
        </ul>
      </div>
      <div>
        <h2>Lista de Jugadores</h2>
        {jugadores.map((jugador, index) => (
          <Jugador key={index} nombre={jugador.nombre} posicion={jugador.posicion} />
        ))}
      </div>
    </div>
  );
}

export default App;

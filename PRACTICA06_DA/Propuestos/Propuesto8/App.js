import React, { useState } from 'react';
import './App.css';

function App() {
  const [jugadores, setJugadores] = useState([]);
  const [nombre, setNombre] = useState('');

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const handleAddJugador = () => {
    if (nombre.trim() !== '') {
      setJugadores([...jugadores, nombre]);
      setNombre('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Equipo de Fútbol BARCELONA</h1>
        <img src="barsaa.png" alt="Escudo del Equipo" />
        <p className="instrucciones">Introduce el nombre del jugador:</p>
        <input type="text" value={nombre} onChange={handleInputChange} />
        <button onClick={handleAddJugador}>Agregar Jugador</button>
        <h2 className="jugadores-title">Jugadores:</h2>
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

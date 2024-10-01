import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [jugadores, setJugadores] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setJugadores(['Lionel Messi', 'Gerard Piqué', 'Sergio Busquets']);
      setCargando(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Equipo de Fútbol BARCELONA</h1>
        <p style={{ fontSize: '3em' }}>{cargando ? 'Cargando...' : 'Jugadores:'}</p> {/* Aumentado tamaño de letra */}
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

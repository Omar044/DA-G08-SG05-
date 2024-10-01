import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import './App.css';

function Home() {
  return <h2>Bienvenido a la página principal</h2>;
}

function Jugadores() {
  // Arreglo con más jugadores
  const jugadores = [
    'Lionel Messi', 'Xavi Hernández', 'Andrés Iniesta', 'Gerard Piqué', 'Sergio Busquets',
    'Carles Puyol', 'Samuel Eto\'o', 'Ronaldinho', 'Neymar Jr', 'Luis Suárez', 'Victor Valdés'
  ];

  return (
    <div>
      <h2>Lista de Jugadores</h2>
      <ul className="jugadores-lista"> {/* Aplica la clase para estilo */}
        {jugadores.map((jugador, index) => (
          <li key={index}>{jugador}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Equipo de Fútbol BARCELONA</h1>
          <img src="barsaa.png" alt="Escudo del Equipo" />
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/jugadores">Jugadores</Link>
          </nav>
          <Routes>
            <Route path="/jugadores" element={<Jugadores />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

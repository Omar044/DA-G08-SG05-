import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import './App.css';

function Home() {
  return <h2>Bienvenido a la página principal</h2>;
}

function JugadorDetalle({ jugador }) {
  return (
    <div>
      <h2>Detalles de {jugador}</h2>
      <p>Información adicional sobre {jugador}...</p>
      <Link to="/jugadores">Regresar a la lista de jugadores</Link>
    </div>
  );
}

function Jugadores() {
  const jugadores = {
    delanteros: [
      'Lionel Messi',
      'Samuel Eto\'o',
      'Luis Suárez',
      'Neymar Jr'
    ],
    defensas: [
      'Gerard Piqué',
      'Carles Puyol',
      'Sergio Busquets'
    ],
    arqueros: [
      'Victor Valdés'
    ]
  };

  return (
    <div>
      <h2>Lista de Jugadores</h2>
      <div className="posiciones">
        {Object.entries(jugadores).map(([posicion, lista]) => (
          <div key={posicion} className="posicion">
            <h3>{posicion.charAt(0).toUpperCase() + posicion.slice(1)}</h3>
            <ul className="jugadores-lista">
              {lista.map((jugador, index) => (
                <li key={index}>
                  <Link to={`/jugadores/${posicion}/${index}`}>{jugador}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const jugadores = {
    delanteros: [
      'Lionel Messi',
      'Samuel Eto\'o',
      'Luis Suárez',
      'Neymar Jr'
    ],
    defensas: [
      'Gerard Piqué',
      'Carles Puyol',
      'Sergio Busquets'
    ],
    arqueros: [
      'Victor Valdés'
    ]
  };

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
            <Route path="/" element={<Home />} />
            <Route path="/jugadores" element={<Jugadores />} />
            <Route path="/jugadores/:posicion/:id" element={({ match }) => {
              const { posicion, id } = match.params;
              return <JugadorDetalle jugador={jugadores[posicion][id]} />;
            }} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;



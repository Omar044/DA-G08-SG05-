import React from "react";
import { Link } from "react-router-dom";
import barsaLogo from '../barsa.png'; // Asegúrate de que la ruta sea correcta

const Home = () => {
  return (
    <div>
      <h1>Bienvenido al FC Barcelona</h1>
      
      <img src={barsaLogo} alt="Escudo del Equipo" />

      <nav>
        <Link to="/players">Jugadores</Link>
        <Link to="/matches">Partidos</Link>
      </nav>
    </div>
  );
};

export default Home;

import React from 'react';

function Jugador({ nombre, posicion }) {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Posición: {posicion}</p>
    </div>
  );
}

export default Jugador;


import React from 'react';

function Jugador({ nombre, posicion, edad }) {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Posición: {posicion}</p>
      <p>Edad: {edad} años</p>
    </div>
  );
}

export default Jugador;

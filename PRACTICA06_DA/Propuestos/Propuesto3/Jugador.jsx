import React from 'react';

function Jugador({ Ronaldinho, Delantero }) {
  return (
    <div>
      <h3>{Ronaldinho}</h3>
      <p>Posición: {Delantero}</p>
    </div>
  );
}

export default Jugador;

import { Link, Outlet } from "react-router-dom";
import { usePlayer } from "../context/PlayerContext"; // Importa el contexto

const Players = () => {
  const { players } = usePlayer(); // Obtiene la lista de jugadores del contexto

  return (
    <div>
      <h1>Jugadores del FC Barcelona</h1>
      <ul>
        {players.map(player => ( // Mapea la lista de jugadores
          <li key={player.id}>
            <Link to={player.id.toString()}>{player.name}</Link>
			<button onClick={()=>removePlayer(player.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <Outlet /> 
    </div>
  );
};

export default Players;

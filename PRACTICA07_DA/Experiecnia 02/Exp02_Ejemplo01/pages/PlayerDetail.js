import { useParams } from "react-router-dom";

const PlayerDetail = () => {
  const { playerId } = useParams();

  const playersData = {
    1: {
      name: "Robert Lewandowski",
      position: "Delantero",
      age: 35,
      description: "El mejor delantero Viejo."
    },
    2: {
      name: "Lamine Yamal",
      position: "Delantero",
      age: 17,
      description: "Promesa mundial, el mejor jugador joven del mundo."
    }
  };

  const player = playersData[playerId];

  return (
    <div>
      {player ? (
        <div>
          <h2>{player.name}</h2>
          <p><strong>Posición:</strong> {player.position}</p>
          <p><strong>Edad:</strong> {player.age}</p>
          <p><strong>Descripción:</strong> {player.description}</p>
        </div>
      ) : (
        <p>Jugador no encontrado.</p>
      )}
    </div>
  );
};

export default PlayerDetail;

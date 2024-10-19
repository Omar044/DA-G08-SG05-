import { useParams } from "react-router-dom";

const MatchDetail = () => {
  const { matchId } = useParams();

  const matchesData = {
    1: {
      homeTeam: "FC Barcelona",
      awayTeam: "Real Madrid",
      date: "2023-10-15",
      description: "Un emocionante clásico de La Liga."
    },
    2: {
      homeTeam: "FC Barcelona",
      awayTeam: "Atlético de Madrid",
      date: "2023-11-01",
      description: "Partido clave en la lucha por el título."
    }
  };

  const match = matchesData[matchId];

  return (
    <div>
      {match ? (
        <div>
          <h2>Partido: {match.homeTeam} vs {match.awayTeam}</h2>
          <p><strong>Fecha:</strong> {match.date}</p>
          <p><strong>Descripción:</strong> {match.description}</p>
        </div>
      ) : (
        <p>Partido no encontrado.</p>
      )}
    </div>
  );
};

export default MatchDetail;

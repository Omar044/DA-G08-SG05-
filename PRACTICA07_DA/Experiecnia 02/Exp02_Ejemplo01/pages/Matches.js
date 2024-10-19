import { Link, Outlet } from "react-router-dom";

const Matches = () => {
  return (
    <div>
      <h1>Partidos del FC Barcelona</h1>
      <ul>
        <li>
          <Link to="1">FC Barcelona vs Real Madrid</Link>
        </li>
        <li>
          <Link to="2">FC Barcelona vs Atlético de Madrid</Link>
        </li>
      </ul>
      <Outlet /> {/* Permite que se muestre el detalle del partido aquí */}
    </div>
  );
};

export default Matches;

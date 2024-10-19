import { Link, Outlet } from "react-router-dom";

const Players = () => {
  return (
    <div>
      <h1>Jugadores del FC Barcelona</h1>
      <ul>
        <li>
          <Link to="1">Robert Lewandowski</Link>
        </li>
        <li>
          <Link to="2">Lamine Yamal</Link>
        </li>
      </ul>
      <Outlet /> 
    </div>
  );
};

export default Players;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Players from './pages/Players';
import PlayerDetail from './pages/PlayerDetail';
import Matches from './pages/Matches'; 
import MatchDetail from './pages/MatchDetail'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="players" element={<Players />}>
          <Route path=":playerId" element={<PlayerDetail />} />
        </Route>
        <Route path="matches" element={<Matches />} >
          <Route path=":matchId" element={<MatchDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

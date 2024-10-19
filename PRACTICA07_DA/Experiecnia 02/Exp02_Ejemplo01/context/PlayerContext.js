import React, { createContext, useContext, useState } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Lionel Messi', position: 'Forward' },
    { id: 2, name: 'Lamine Yamal', position: 'Midfielder' },
  ]);

  return (
    <PlayerContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  return useContext(PlayerContext);
};

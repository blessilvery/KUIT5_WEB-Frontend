import React, { useEffect, useState } from "react";
import MainBoard from "./components/MainBoard/MainBoard";
import TopBar from "./components/TopBar/TopBar";
import BotBar from "./components/BotBar/BotBar";
import { doubledData } from "./utils/dataPreprocessor";

const App = () => {
  const [correctCount, setCorrectCount] = useState(0);
  const [newGame, setNewGame] = useState(false);
  if (correctCount === 5) {
    setNewGame(true);
  }

  return (
    <div>
      <TopBar correctCount={correctCount} />
      <MainBoard setCorrectCount={setCorrectCount} newGame={newGame} setNewGame={setNewGame} />
      <BotBar />
    </div>
  );
};

export default App;

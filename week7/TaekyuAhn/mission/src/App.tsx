import React, { useState } from "react";
import MainBoard from "./components/MainBoard/MainBoard";
import TopBar from "./components/TopBar/TopBar";
import BotBar from "./components/BotBar/BotBar";

const App = () => {
  const [correctCount, setCorrectCount] = useState(0);
  return (
    <div>
      <TopBar />
      <MainBoard />
      <BotBar />
    </div>
  );
};

export default App;

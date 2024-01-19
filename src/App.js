// import styled from "styled-components";
import { useState } from "react";
import { Startgame } from "./component/Startgame";
import "./index.css";
import GamePlay from "./component/GamePlay";

function App() {
  const [isGameStart, set_is_Game_Start] = useState(false);

  const toggleGameplay = () => {
    set_is_Game_Start((prev) => !prev);
  };
  return (
    <>{isGameStart ? <GamePlay /> : <Startgame toggle={toggleGameplay} />}</>
  );
}

export default App;

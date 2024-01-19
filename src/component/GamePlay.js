import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [CurrDice, SetCurrDice] = useState(1);
  const [Error, SetError] = useState("");
  const [SelectedNum, SetSelectednum] = useState(0);
  const [Score, SetScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const Random_Number = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const RoleDice = () => {
    const setDice = Random_Number(1, 6);
    if (!SelectedNum) {
      SetError("You have not selected any number");
      return;
    }
    SetCurrDice((prev) => setDice);
    if (SelectedNum === setDice) {
      SetScore((prev) => prev + setDice);
    } else {
      SetScore((prev) => prev - 2);
    }
    SetSelectednum(0);
  };
  const ResetScore = () => {
    SetScore(0);
  };

  return (
    <MainContainer>
      <div className="Top_section">
        <TotalScore Score={Score} />
        <NumberSelector
          Error={Error}
          SetError={SetError}
          SelectedNum={SelectedNum}
          SetSelectednum={SetSelectednum}
        />
      </div>
      <RollDice CurrDice={CurrDice} RoleDice={RoleDice} />
      <div className="btn">
        <OutlineButton onClick={ResetScore}>RESET BUTTON</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"}RULES
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};
const MainContainer = styled.main`
  padding-top: 25px;
  .Top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btn {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;
export default GamePlay;

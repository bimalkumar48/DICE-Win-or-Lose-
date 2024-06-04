import styled from "styled-components";
import Img1 from "../images/dice/dice1.png";
import Img2 from "../images/dice/dice2.png";
import Img3 from "../images/dice/dice3.png";
import Img4 from "../images/dice/dice4.png";
import Img5 from "../images/dice/dice5.png";
import Img6 from "../images/dice/dice6.png";
const RollDice = ({ CurrDice, RoleDice }) => {
  const Arr = [Img1, Img2, Img3, Img4, Img5, Img6];
  return (
    <RollContainer>
      <div className="Dice" onClick={RoleDice}>
      <img src={Arr[CurrDice - 1]} alt={Arr[CurrDice - 1]} />
      </div>
      <p>Click on Dice to Roll</p>
    </RollContainer>
  );
};

const RollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  .Dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

export default RollDice;

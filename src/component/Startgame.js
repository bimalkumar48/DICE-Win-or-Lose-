import styled from "styled-components";
import { Button } from "../Styled/Button";
import DiceImg from "../images/dicelogo.png";

export const Startgame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src={DiceImg} alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1182px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content {
    h1 {
      color: #000;
      font-family: Poppins;
      font-size: 96px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

import styled from "styled-components";
const RollDice = ({ CurrDice, RoleDice }) => {
  return (
    <RollContainer>
      <div className="Dice" onClick={RoleDice}>
        <img src={`../images/dice/dice${CurrDice}.png`} alt="" />
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

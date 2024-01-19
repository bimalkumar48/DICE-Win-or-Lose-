import styled from "styled-components";
const NumberSelector = ({ Error, SetError, SelectedNum, SetSelectednum }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const SetHandler = (value) => {
    SetError("");
    SetSelectednum(value);
  };
  return (
    <>
      <SelectedNumberContainer>
        <p className="error">{Error}</p>
        <div className="flex">
          {arrNumber.map((value, i) => (
            <Box
              onClick={() => SetHandler(value)}
              isSelected={value === SelectedNum}
              key={i}
            >
              {value}
            </Box>
          ))}
        </div>
        <p>Select Number</p>
      </SelectedNumberContainer>
    </>
  );
};

const SelectedNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  .error {
    color: red;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;
const Box = styled.div`
  border: 2px solid black;
  display: grid;
  place-items: center;
  height: 70px;
  width: 70px;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
`;
export default NumberSelector;

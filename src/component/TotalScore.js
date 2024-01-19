import styled from "styled-components";
const TotalScore = ({ Score }) => {
  return (
    <>
      <ScoreCard>
        <h1>{Score}</h1>
        <p>Total Score</p>
      </ScoreCard>
    </>
  );
};

const ScoreCard = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 100px;
    font-weight: 500px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
export default TotalScore;

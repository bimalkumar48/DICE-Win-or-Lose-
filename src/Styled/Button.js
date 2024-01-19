import styled from "styled-components";
export const Button = styled.button`
  display: flex;
  width: 220px;
  padding: 10px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #000;
  color: #fff;
  border: #000 transparent 2px;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    border: #000 solid 2px;
    color: black;
    background-color: #fff;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  border: black solid 2px;
  color: black;
  background-color: white;
  &:hover {
    border: white transparent 2px;
    color: white;
    background-color: black;
  }
`;

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 20px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #dc3545;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const ResetButton = ({ resetAll }) => {
  return <Button onClick={resetAll}>Reset All</Button>;
};

export default ResetButton;

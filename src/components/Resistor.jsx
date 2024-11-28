import React from "react";
import styled from "styled-components";

const Input = styled.input`
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ResistorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the content horizontally */
  justify-content: center; /* Centers the content vertically */
`;

const Resistor = ({ resistorValue, setResistorValue }) => {
  return (
    <tr>
      <td>Resistor</td>
      <td>
        <ResistorContainer>
          <wokwi-resistor value={resistorValue}></wokwi-resistor>
          <p>Value: {resistorValue}Ω</p>
          <Input
            type="number"
            placeholder="Enter Resistor Value"
            value={resistorValue}
            onChange={(e) => setResistorValue(e.target.value)}
          />
        </ResistorContainer>
      </td>
      <td>Limits electrical current in circuits; adjustable for testing purposes.</td>
    </tr>
  );
};

export default Resistor;

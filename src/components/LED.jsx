import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 5px;
  padding: 5px 10px;
  font-size: 14px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Select = styled.select`
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const LedContainer = styled.div`
  display: inline-block;
  transform: ${(props) => (props.flip ? "rotate(180deg)" : "none")};
  transition: transform 0.3s ease-in-out;
`;

const LED = ({
  ledOn,
  setLedOn,
  ledColor,
  setLedColor,
  brightness,
  setBrightness,
  flip,
  setFlip,
}) => {
  return (
    <tr>
      <td>LED</td>
      <td>
        <LedContainer flip={flip}>
          <wokwi-led
            color={ledColor}
            value={ledOn ? "on" : ""}
            brightness={brightness}
          ></wokwi-led>
        </LedContainer>
        <br />
        <Button onClick={() => setLedOn(!ledOn)}>
          {ledOn ? "Turn Off" : "Turn On"}
        </Button>
        <Select
          value={ledColor}
          onChange={(e) => setLedColor(e.target.value)}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
          <option value="orange">Orange</option>
          <option value="white">White</option>
        </Select>
        <br />
        <label>Brightness: {brightness.toFixed(2)}</label>
        <Input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
        />
        <br />
        <Button onClick={() => setFlip(!flip)}>{flip ? "Unflip" : "Flip"}</Button>
      </td>
      <td>Simulates flipping of the LED visually.</td>
    </tr>
  );
};

export default LED;

import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Servo = ({ angle, setAngle }) => {
  const [hornType, setHornType] = useState("single"); // State for horn type

  return (
    <tr>
      <td>Servo</td>
      <td>
        <wokwi-servo angle={angle} horn={hornType}></wokwi-servo>
        <p>Current Angle: {angle}°</p>
        <Input
          type="range"
          min="0"
          max="180"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
        />
        <br />
        <label>Select Horn Type:</label>
        <Select value={hornType} onChange={(e) => setHornType(e.target.value)}>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="cross">Cross</option>
        </Select>
      </td>
      <td>&lt;wokwi-servo angle="{angle}" horn="{hornType}"&gt;&lt;/wokwi-servo&gt;</td>
    </tr>
  );
};

export default Servo;

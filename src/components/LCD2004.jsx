import React, { useState } from "react";
import styled from "styled-components";

const Dropdown = styled.select`
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const TextArea = styled.textarea`
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 80%;
  height: 100px;
`;

const LCD2004 = ({lcd2004Text, setLcd2004Text}) => {
  const [background, setBackground] = useState("blue"); // Default background: blue
  const [color, setColor] = useState("white"); // Default color: white
  const [text, setText] = useState("hello world"); // Default text

  const handleBackgroundChange = (value) => {
    setBackground(value);
    // Automatically update color based on background
    if (value === "blue") {
      setColor("white");
    } else if (value === "green") {
      setColor(""); // Default text color (black)
    } else {
      setColor(""); // Reset for no background
    }
  };

  return (
    <tr>
      <td>LCD2004</td>
      <td>
        <wokwi-lcd2004
          pins="i2c"
          background={background}
          color={color}
          text={lcd2004Text} // Render the entire text on the LCD
        ></wokwi-lcd2004>
        <br />
        <label>Background:</label>
        <Dropdown
          value={background}
          onChange={(e) => handleBackgroundChange(e.target.value)}
        >
          <option value="">None</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </Dropdown>
        <br />
        <label>Enter Text (use newlines for multiple lines):</label>
        <TextArea
          value={lcd2004Text}
          onChange={(e) => setLcd2004Text(e.target.value)}
          placeholder="Enter text with lines separated by newlines"
        />
      </td>
      <td>
        Simulates a 20x4 LCD display with customizable text, background, and color. Text color
        automatically adjusts based on background selection.
      </td>
    </tr>
  );
};

export default LCD2004;

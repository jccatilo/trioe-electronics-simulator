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

const Input = styled.input`
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 50px;
`;

const LCD2004 = ({ lcd2004Text, setLcd2004Text }) => {
  const [background, setBackground] = useState("blue"); // Default background: blue
  const [color, setColor] = useState("white"); // Default color: white
  const [blink, setBlink] = useState(""); // Default: no blink
  const [cursorX, setCursorX] = useState(1); // Default cursor X position
  const [cursorY, setCursorY] = useState(1); // Default cursor Y position

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
          blink={blink}
          cursorx={cursorX - 1} // Subtract 1 from cursorX
          cursory={cursorY - 1} // Subtract 1 from cursorY
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
        <label>Blink:</label>
        <Dropdown
          value={blink}
          onChange={(e) => setBlink(e.target.value)}
        >
          <option value="">Off</option>
          <option value="true">On</option>
        </Dropdown>
        <br />
        <label>Cursor X (1-20):</label>
        <Input
          type="number"
          min="1"
          max="20"
          value={cursorX}
          onChange={(e) => setCursorX(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)))}
        />
        <br />
        <label>Cursor Y (1-4):</label>
        <Input
          type="number"
          min="1"
          max="4"
          value={cursorY}
          onChange={(e) => setCursorY(Math.max(1, Math.min(4, parseInt(e.target.value) || 1)))}
        />
        <br />
        <label>Enter Text (use newlines for multiple lines):</label>
        <TextArea
          value={lcd2004Text}
          onChange={(e) => setLcd2004Text(e.target.value)}
          placeholder="Enter text with lines separated by newlines"
        />
      </td>
      <td>
      &lt;wokwi-lcd2004
          pins="i2c"
          background="{background}"
          color="{color}"
          text="{lcd2004Text}"
          blink="{blink}"
          cursorx="{cursorX - 1}"
          cursory="{cursorY - 1}"
          &gt;&lt;/wokwi-lcd2004&gt;
      </td>
    </tr>
  );
};

export default LCD2004;

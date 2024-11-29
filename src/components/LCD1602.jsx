import React, { useState } from "react";
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

const Input = styled.input`
  margin: 5px;
  padding: 5px;
  font-size: 14px;

  border: 1px solid #ccc;
  border-radius: 3px;
  width: 80%;
`;

const Dropdown = styled.select`
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const LCD1602 = ({ lcdText, setLcdText}) => {
  const [background, setBackground] = useState("blue"); // Default background: blue
  const [color, setColor] = useState("white"); // Default color: white
  const [blink, setBlink] = useState(""); // Default: No blinking
  const [cursorX, setCursorX] = useState(1); // Default X: 1
  const [cursorY, setCursorY] = useState(1); // Default Y: 1
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
  // Handle Cursor X and Y Updates
  const handleCursorXChange = (e) => {
    const value = Math.max(1, Math.min(16, parseInt(e.target.value, 10) || 1));
    setCursorX(value);
  };

  const handleCursorYChange = (e) => {
    const value = Math.max(1, Math.min(2, parseInt(e.target.value, 10) || 1));
    setCursorY(value);
  };

  return (
    <tr>
      <td>LCD1602</td>
      <td>
        {/* Wokwi LCD Component */}
        <wokwi-lcd1602
          pins="i2c"
          text={lcdText}
          background={background}
          color={color}
          blink={blink}
          cursorx={cursorX - 1} // Convert to 0-based index
          cursory={cursorY - 1} // Convert to 0-based index
        ></wokwi-lcd1602>
        <br />

        {/* Enter Text */}
        <label>
          Enter Text:
          <Input
            type="text"
            value={lcdText}
            onChange={(e) => setLcdText(e.target.value)}
            placeholder="Enter LCD text"
          />
        </label>
        <br />

        {/* Change Background */}
        <label>
          Background Color:
          <Dropdown
            value={background}
            onChange={(e) => handleBackgroundChange(e.target.value)} // Update parent state
          >
            <option value="">None</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </Dropdown>
        </label>
        <br />

        {/* Blink Toggle Button */}
        <Button onClick={() => setBlink(blink === "true" ? "" : "true")}>
          {blink === "true" ? "Disable Blink" : "Enable Blink"}
        </Button>
        <br />

        {/* Cursor Position Inputs */}
        <label>
          Cursor X (1-16):
          <Input
            type="number"
            value={cursorX}
            min="1"
            max="16"
            onChange={handleCursorXChange}
          />
        </label>
        <br />
        <label>
          Cursor Y (1-2):
          <Input
            type="number"
            value={cursorY}
            min="1"
            max="2"
            onChange={handleCursorYChange}
          />
        </label>
      </td>
      <td>
         &lt;wokwi-lcd1602
          pins="i2c"
          text="{lcdText}"
          background="{background}"
          color="{color}"
          blink="{blink}"
          cursorx="{cursorX - 1}"
          cursory="{cursorY - 1}"
          &gt;&lt;/wokwi-lcd1602&gt;
      </td>
    </tr>
  );
};

export default LCD1602;

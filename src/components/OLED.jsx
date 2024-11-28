import React from "react";
import styled from "styled-components";

const Input = styled.input`
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const OLED = ({ oledLines, setOledLines }) => {
  return (
    <tr>
      <td>OLED</td>
      <td>
        <wokwi-ssd1306 lines={oledLines}></wokwi-ssd1306>
        {oledLines.map((line, index) => (
          <div key={index}>
            <Input
              type="text"
              placeholder={`Line ${index + 1}`}
              value={line}
              onChange={(e) =>
                setOledLines((prevLines) => {
                  const newLines = [...prevLines];
                  newLines[index] = e.target.value;
                  return newLines;
                })
              }
            />
          </div>
        ))}
      </td>
      <td>Displays graphical or textual data for compact interfaces.</td>
    </tr>
  );
};

export default OLED;

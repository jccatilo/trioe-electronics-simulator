import React from "react";
import styled from "styled-components";
import LED from "./LED";
import LCD1602 from "./LCD1602";
import Buzzer from "./Buzzer";
import Servo from "./Servo";
import Resistor from "./Resistor";
import OLED from "./OLED";
import LCD2004 from "./LCD2004";

const StyledTable = styled.table`
  margin: 20px auto;
  border-collapse: collapse;
  width: 80%;
  font-size: 16px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #f4f4f4;
  }
`;

const Table = (props) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Part Name</th>
          <th>Test Functions</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        <LED {...props} />
        <LCD1602 {...props} />
        <LCD2004 {...props} />
        <Buzzer {...props} />
        <Servo {...props} />
        <Resistor {...props} />
        <OLED {...props} />
        
      </tbody>
    </StyledTable>
  );
};

export default Table;

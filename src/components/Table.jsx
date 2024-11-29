import React from "react";
import styled from "styled-components";
import LED from "./LED";
import LCD1602 from "./LCD1602";
import Buzzer from "./Buzzer";
import Servo from "./Servo";
import Resistor from "./Resistor";
import OLED from "./OLED";
import LCD2004 from "./LCD2004";

/* Wrapper for horizontal scrolling */
const ResponsiveWrapper = styled.div`
  overflow-x: auto;
  margin: 10px 0;
`;

const StyledTable = styled.table`
  margin: 20px auto;
  border-collapse: collapse;
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
     /* Limit the width of the "Usage" column */
  th:nth-child(3), /* Target the header */
  td:nth-child(3) { /* Target the cells */
    max-width: 300px; /* Adjust this value as needed */
    white-space: pre-wrap; /* Preserve spaces and wrap text */
    word-wrap: break-word;

  /* Add responsiveness for smaller screens */
  @media (max-width: 768px) {
    font-size: 14px; /* Reduce font size for smaller screens */
    th,
    td {
      padding: 8px; /* Adjust padding */
    }
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Further reduce font size for very small screens */
    th,
    td {
      padding: 5px; /* Adjust padding for small screens */
    }
    th {
      font-size: 14px;
      
    }

    /* Flex layout for very small screens */
    display: block; /* Convert table into a block element */
    width: 100%;

    thead {
      display: none; /* Hide table headers */
    }

    tbody {
      display: flex;
      flex-direction: column;
    }

    tr {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      border-bottom: 1px solid #ccc; /* Optional: Add separator between rows */
    }

    td {
      display: block;
      text-align: left;
      position: relative;
      padding-left: 50%;
      
     
    }

    td:before {
      content: attr(data-label); /* Use data-label attribute for each cell */
      position: absolute;
      left: 10px;
      font-weight: bold;
      white-space: nowrap;
      
    }
  }
`;

const Table = (props) => {
  return (
    <ResponsiveWrapper>
      <StyledTable>
        <thead>
          <tr style={{width: "200px"}}>
            <th>Part Name</th>
            <th>Test Functions</th>
            <th >
              Usage (make sure to npm i @wokwi/elements and import "@wokwi/elements";)
            </th>
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
    </ResponsiveWrapper>
  );
};

export default Table;

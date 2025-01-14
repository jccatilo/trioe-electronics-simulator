import React from "react";
import styled from "styled-components";
import LED from "./LED";
import LCD1602 from "./LCD1602";
import LCD2004 from "./LCD2004";
import Buzzer from "./Buzzer";
import Servo from "./Servo";
import Resistor from "./Resistor";
import OLED from "./OLED";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardView = (props) => {
  return (
    <CardContainer>
      {/* Example card for each component */}
      <Card>
        <h3>LED</h3>
        <LED {...props} />
      </Card>
      <Card>
        <h3>LCD1602</h3>
        <LCD1602 {...props} />
      </Card>
      <Card>
        <h3>LCD2004</h3>
        <LCD2004 {...props} />
      </Card>
      <Card>
        <h3>Buzzer</h3>
        <Buzzer {...props} />
      </Card>
      <Card>
        <h3>Servo</h3>
        <Servo {...props} />
      </Card>
      <Card>
        <h3>Resistor</h3>
        <Resistor {...props} />
      </Card>
      <Card>
        <h3>OLED</h3>
        <OLED {...props} />
      </Card>
    </CardContainer>
  );
};

export default CardView;

import React, { useState } from "react";
import styled from "styled-components";
import "@wokwi/elements";
import Table from "./components/Table";
import ResetButton from "./components/ResetButton";

const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
`;

function App() {
  // Shared states
  const [angle, setAngle] = useState(0);
  const [ledOn, setLedOn] = useState(false);
  const [ledColor, setLedColor] = useState("blue");
  const [brightness, setBrightness] = useState(1);
  const [flip, setFlip] = useState(false);
  const [lcdText, setLcdText] = useState("Hello, World!        -TRIOE Team");
  const [buzzerOn, setBuzzerOn] = useState(false);
  const [resistorValue, setResistorValue] = useState("220");
  const [oledLines, setOledLines] = useState(["Welcome to", "TRIOE Components"]);
  const [lcd2004Text, setLcd2004Text] = useState("Hello, World!                                                        -TRIOE Team");
  const [lcd2004Background, setLcd2004Background] = useState("blue");

  const resetAll = () => {
    setAngle(0);
    setLedOn(false);
    setLedColor("blue");
    setBrightness(1);
    setFlip(false);
    setBuzzerOn(false);
    setLcdText("Hello, World!        -TRIOE Team");
    setResistorValue("220");
    setOledLines(["Welcome to", "TRIOE Components"]);
    setLcd2004Text("Hello, World!                                                        -TRIOE Team");
    setLcd2004Background("blue");
  };

  return (
    <AppContainer>
      <h1>Electronic Components Testing Table</h1>
      <p><a href="https://github.com/jccatilo/trioe-electronics-simulator">click this link for my repo</a></p>
      <ResetButton resetAll={resetAll} />
      <Table
        angle={angle}
        setAngle={setAngle}
        ledOn={ledOn}
        setLedOn={setLedOn}
        ledColor={ledColor}
        setLedColor={setLedColor}
        brightness={brightness}
        setBrightness={setBrightness}
        flip={flip}
        setFlip={setFlip}
        lcdText={lcdText}
        setLcdText={setLcdText}
        buzzerOn={buzzerOn}
        setBuzzerOn={setBuzzerOn}
        resistorValue={resistorValue}
        setResistorValue={setResistorValue}
        oledLines={oledLines}
        setOledLines={setOledLines}
        lcd2004Text={lcd2004Text}
        setLcd2004Text={setLcd2004Text}
        lcd2004Background={lcd2004Background}
        setLcd2004Background={setLcd2004Background}
        resetAll={resetAll}
      />
    </AppContainer>
  );
}

export default App;
import React, { useState } from "react";
import styled from "styled-components";
import * as Tone from "tone";

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

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin: 10px auto;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  width: 100px;
  text-align: left;
`;

const Input = styled.input`
  margin: 0 10px;
  flex-grow: 1;
`;

const Buzzer = () => {
  const [frequency, setFrequency] = useState(440); // Default frequency: A4 note
  const [buzzerOn, setBuzzerOn] = useState(false);

  // Tone.js oscillator
  const oscillator = React.useRef(null);

  const handleToggle = () => {
    if (!buzzerOn) {
      // Turn on buzzer (sound and Wokwi visual)
      if (!oscillator.current) {
        oscillator.current = new Tone.Oscillator({
          frequency,
          type: "sine", // Sine wave sound
        }).toDestination();
      }
      oscillator.current.frequency.value = frequency;
      oscillator.current.start();
    } else {
      // Turn off buzzer (stop sound)
      if (oscillator.current) {
        oscillator.current.stop();
      }
    }
    setBuzzerOn(!buzzerOn);
  };

  const handleFrequencyChange = (e) => {
    const newFrequency = Number(e.target.value);
    setFrequency(newFrequency);
    if (oscillator.current) {
      oscillator.current.frequency.value = newFrequency;
    }
  };

  return (
    <tr>
      <td>Buzzer</td>
      <td>
        {/* Wokwi Buzzer */}
        <wokwi-buzzer hasSignal={buzzerOn ? "on" : ""}></wokwi-buzzer>
        <br />
        <SliderContainer>
          <Label>{frequency} Hz</Label>
          <Input
            type="range"
            min="0"
            max="10000"
            step="1"
            value={frequency}
            onChange={handleFrequencyChange}
          />
        </SliderContainer>
        <Button onClick={handleToggle}>{buzzerOn ? "Turn Off" : "Turn On"}</Button>
      </td>
      <td>
      &lt;wokwi-buzzer hasSignal="{buzzerOn ? "on" : ""}"&gt;&lt;/wokwi-buzzer&gt; <br></br><br></br> <i>use tone.js for the sound. wokwi has no sound library yet.</i>
      </td>
    </tr>
  );
};

export default Buzzer;

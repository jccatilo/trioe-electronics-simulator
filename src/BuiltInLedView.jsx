import React, { useState, useEffect, useRef } from "react";

const ArduinoLEDBlinker = () => {
  const [delayTime, setDelayTime] = useState(1000); // Dropdown for delay()
  const [terminalLogs, setTerminalLogs] = useState([
    "[INFO]: Ready... Get set... Tinker!",
  ]); // Logs for the terminal
  const [showTimestamp, setShowTimestamp] = useState(false); // Toggle for timestamps
  const [isLEDOn, setIsLEDOn] = useState(false); // State for the red dot
  const terminalRef = useRef(null);
  const intervalRef = useRef(null);

  const [isUploading, setIsUploading] = useState(false); // Simulate uploading

  const handleUpload = () => {
    setTerminalLogs((prevLogs) => [
      ...prevLogs,
      logMessage("[INFO]: Uploading to board..."),
      logMessage("[SUCCESS]: Upload completed successfully!"),
    ]);
    setIsUploading(true);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsUploading(false);
    setTerminalLogs([
      logMessage("[INFO]: Reset Pressed..."),
      logMessage("[SUCCESS]: Reset done!"),
      logMessage("[INFO]: Ready... Get set... Tinker!"),
    ]);
    setIsLEDOn(false); // Reset the red dot
    setDelayTime(1000);
  };

  const logMessage = (message) => {
    if (showTimestamp) {
      const now = new Date();
      const timestamp = now.toLocaleTimeString("en-US", { hour12: false }) + `.${now.getMilliseconds()}`;
      return `[${timestamp}] ${message}`;
    }
    return message;
  };

  useEffect(() => {
    if (isUploading) {
      intervalRef.current = setInterval(() => {
        setTerminalLogs((prevLogs) => [
          ...prevLogs,
          logMessage("LED On"),
          logMessage("LED Off"),
        ]);
        setIsLEDOn((prevState) => !prevState); // Toggle the red dot
      }, delayTime);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isUploading, delayTime, showTimestamp]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif"
    }}>
      {/* Left Column - Arduino IDE */}
      <div style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #ccc",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
      }}>
        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#00457C",
          color: "#ffffff",
          padding: "10px 20px",
        }}>
          <button 
            onClick={handleReset}
            style={{
              marginRight: "10px",
              backgroundColor: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            &#8592;
          </button>
          <h1 style={{ margin: 0, fontSize: "1.5rem" }}>TRIOE Board Built-in LED</h1>
          <div style={{ marginLeft: "auto" }}>
            <button 
              onClick={handleUpload}
              style={{
                margin: "0 5px",
                padding: "5px 10px",
                backgroundColor: "#00A36C",
                color: "#fff",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer"
              }}>Upload</button>
            <button 
              onClick={handleReset}
              style={{
                margin: "0 5px",
                padding: "5px 10px",
                backgroundColor: "#FF4136",
                color: "#fff",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer"
              }}>Reset</button>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "10px", backgroundColor: "#1e1e1e", color: "#d4d4d4" }}>
          <p style={{ fontFamily: "'Courier New', monospace" }}>
            int LED_BUILT_IN = 2;
          </p>
          <p style={{ fontFamily: "'Courier New', monospace" }}>
            void setup() &#123;
          </p>
          <div style={{ marginLeft: "20px", fontFamily: "'Courier New', monospace" }}>
            <p>Serial.begin(115200);</p>
            <p>pinMode(LED_BUILT_IN, OUTPUT);</p>
          </div>
          <p style={{ fontFamily: "'Courier New', monospace" }}>&#125;</p>

          <p style={{ fontFamily: "'Courier New', monospace'" }}>
            void loop() &#123;
          </p>
          <div style={{ marginLeft: "20px", fontFamily: "'Courier New', monospace" }}>
            <p>Serial.println("LED On");</p>
            <p>digitalWrite(LED_BUILT_IN, HIGH);</p>
            <label>
              delay(
              <select
                value={delayTime}
                onChange={(e) => setDelayTime(parseInt(e.target.value, 10))}
                style={{
                  backgroundColor: "#1e1e1e",
                  color: "#d4d4d4",
                  border: "1px solid #555",
                  borderRadius: "3px",
                  padding: "2px"
                }}
              >
                <option value={250}>250</option>
                <option value={500}>500</option>
                <option value={1000}>1000</option>
                <option value={2000}>2000</option>
              </select>
              );
            </label>
            <p>Serial.println("LED Off");</p>
            <p>digitalWrite(LED_BUILT_IN, LOW);</p>
            <label>
              delay(
              <select
                value={delayTime}
                onChange={(e) => setDelayTime(parseInt(e.target.value, 10))}
                style={{
                  backgroundColor: "#1e1e1e",
                  color: "#d4d4d4",
                  border: "1px solid #555",
                  borderRadius: "3px",
                  padding: "2px"
                }}
              >
                <option value={250}>250</option>
                <option value={500}>500</option>
                <option value={1000}>1000</option>
                <option value={2000}>2000</option>
              </select>
              );
            </label>
          </div>
          <p style={{ fontFamily: "'Courier New', monospace" }}>&#125;</p>
        </div>

        {/* Timestamp Toggle */}
        <div style={{
          backgroundColor: "#f4f4f4",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #ccc"
        }}>
          <label style={{ fontSize: "14px" }}>
            <input
              type="checkbox"
              checked={showTimestamp}
              onChange={(e) => setShowTimestamp(e.target.checked)}
              style={{ marginRight: "5px" }}
            />
            Enable Timestamp
          </label>
        </div>
        {/* Console Output */}
        <div 
          ref={terminalRef}
          style={{
            backgroundColor: "#1e1e1e",
            color: "#00ff00",
            padding: "10px",
            fontFamily: "'Courier New', monospace",
            fontSize: "12px",
            height: "150px",
            overflowY: "scroll",
          }}
        >
          {terminalLogs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
      </div>

      {/* Right Column - Red Dot Indicator */}
<div style={{
  width: "50%",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f4f4f4",
  position: "relative", // Make the parent relative for positioning the LED
}}>
{/* Right Column - Red Dot Indicator */}
<div style={{
  width: "50%",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f4f4f4",
  position: "relative", // Set relative position for the parent container
}}>
  {/* Image of the TRIOE Board */}
  <img
    src="/trioe-board.png"
    alt="TRIOE Board"
    style={{
      maxWidth: "100%",
      height: "auto",
    }}
  />

  {/* Blinking LED positioned over the board */}
  <div style={{
    position: "absolute", // Position relative to the parent container
    top: "27.6%", // Adjust these values based on the actual position of the LED on the board
    left: "42.25%",
    transform: "translate(-50%, -50%)", // Center the LED on the specified coordinates
    // width: "13px",
    // height: "25px",
    width: "2%",
    height: "4%",
    // borderRadius: "50%", // Circular LED
    backgroundColor: isLEDOn ? "orange" : "white", // Toggle red/gray based on LED state
    boxShadow: isLEDOn ? "0 0 20px red" : "none", // Glow effect when LED is on
    transition: "background-color 0.3s, box-shadow 0.3s",
  }}>
  </div>
</div>
</div>

    </div>
  );
};

export default ArduinoLEDBlinker;
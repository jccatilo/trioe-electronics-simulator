import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ArduinoIDE = () => {
  const [baudRate, setBaudRate] = useState(115200);
  const [printText, setPrintText] = useState("Hello! -from TRIOE.");
  const [delayTime, setDelayTime] = useState(1000);
  const [terminalLogs, setTerminalLogs] = useState([
    "[INFO]: Ready... Get set... Tinker!",
  ]);
  const [showTimestamp, setShowTimestamp] = useState(false);
  const terminalRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const intervalRef = useRef(null);
  const navigate = useNavigate(); // Navigation hook

  const handleUpload = () => {
    setTerminalLogs((prevLogs) => [
      ...prevLogs,
      logMessage("[INFO]: Uploading to board..."),
      logMessage("[SUCCESS]: Upload completed successfully!"),
      logMessage(`Baud Rate: ${baudRate}`),
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
    setBaudRate(115200);
    setPrintText("Hello! -from TRIOE.");
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
        setTerminalLogs((prevLogs) => [...prevLogs, logMessage(`Output: ${printText}`)]);
      }, delayTime);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isUploading, delayTime, printText, showTimestamp]);

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
            onClick={() => navigate("/")} 
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
          <h1 style={{ margin: 0, fontSize: "1.5rem" }}>TRIOE IDE 2.0</h1>
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
            void setup() &#123;
          </p>
          <div style={{ marginLeft: "20px", fontFamily: "'Courier New', monospace" }}>
            <label>
              Serial.begin(
              <select
                value={baudRate}
                onChange={(e) => setBaudRate(parseInt(e.target.value, 10))}
                style={{
                  backgroundColor: "#1e1e1e",
                  color: "#d4d4d4",
                  border: "1px solid #555",
                  borderRadius: "3px",
                  padding: "2px"
                }}
              >
                <option value={9600}>9600</option>
                <option value={115200}>115200</option>
              </select>
              );
            </label>
          </div>
          <p style={{ fontFamily: "'Courier New', monospace" }}>&#125;</p>

          <p style={{ fontFamily: "'Courier New', monospace" }}>
            void loop() &#123;
          </p>
          <div style={{ marginLeft: "20px", fontFamily: "'Courier New', monospace" }}>
            <label>
              Serial.println(
              <input
                type="text"
                value={printText}
                onChange={(e) => setPrintText(e.target.value)}
                style={{
                  backgroundColor: "#1e1e1e",
                  color: "#d4d4d4",
                  border: "1px solid #555",
                  borderRadius: "3px",
                  padding: "2px",
                  width: "200px"
                }}
              />
              );
            </label>
            <br />
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

      {/* Right Column - Circuit Board or Other Objects */}
      <div style={{
        width: "50%",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4"
      }}>
        <div style={{
          border: "1px dashed #ccc",
          borderRadius: "8px",
          width: "90%",
          height: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#888",
          fontSize: "1.2rem"
        }}>
          Circuit Board or Objects Placeholder
        </div>
      </div>
    </div>
  );
};

export default ArduinoIDE;

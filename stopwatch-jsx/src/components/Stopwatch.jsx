import React, { useEffect, useState } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((previousTime) => previousTime + 10);
      }, 10);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const pauseStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  const formatTime = (value) => {
    return String(value).padStart(2, "0");
  };

  return (
    <div className="stopwatch-page">
      <div className="stopwatch-card">
        <h1>⏱ Stopwatch</h1>

        <div className="time-display">
          <div className="time-box">
            <span>{formatTime(hours)}</span>
            <small>Hours</small>
          </div>

          <div className="colon">:</div>

          <div className="time-box">
            <span>{formatTime(minutes)}</span>
            <small>Minutes</small>
          </div>

          <div className="colon">:</div>

          <div className="time-box">
            <span>{formatTime(seconds)}</span>
            <small>Seconds</small>
          </div>

          <div className="colon">:</div>

          <div className="time-box">
            <span>{formatTime(milliseconds)}</span>
            <small>Milliseconds</small>
          </div>
        </div>

        <div className="stopwatch-buttons">
          <button
            className="start-btn"
            onClick={startStopwatch}
            disabled={isRunning}
          >
            ▶ Start
          </button>

          <button
            className="pause-btn"
            onClick={pauseStopwatch}
            disabled={!isRunning}
          >
            ⏸ Pause
          </button>

          <button
            className="reset-btn"
            onClick={resetStopwatch}
          >
            ↻ Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
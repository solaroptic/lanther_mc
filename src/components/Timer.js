import React, { useState, useEffect } from "react";
import styles from "./CSS/LPage.module.css";
import sfx from "./assets/cannon.mp3";

const Timer = ({ hide }) => {
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [isRed, setIsRed] = useState(false);

  const kill = () => {
    setStartTimer(false);
    hide();
  };
  const go = () => {
    !startTimer ? setStartTimer(true) : kill();
  };

  useEffect(() => {
    if (startTimer) {
      const interval = setInterval(() => {
        setSeconds((seconds) => (seconds !== 0 ? seconds - 1 : 59));
        setMinutes((minutes) => (seconds === 0 ? minutes - 1 : minutes));
        minutes === 0 && seconds === 2 && new Audio(sfx).play();
        minutes === 0 && seconds === 0 && hide();
        minutes === 10 && seconds === 1 && setIsRed(true);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [minutes, seconds, startTimer]);

  return (
    <div
      className={!isRed ? `${styles.timer}` : `${styles.timerRed}`}
      onClick={go}
    >
      <h5>Timer</h5>
      <p>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Timer;

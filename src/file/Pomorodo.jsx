import React, { useState, useEffect } from "react";

function Pomodoro() {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [timerType, setTimerType] = useState("pomodoro"); 


  useEffect(() => {
    if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        }
      });
    }
  }, []);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(timer);
      showNotification();
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const showNotification = () => {
    if (Notification.permission === "granted") {
      new Notification("Time's up!", {
        body: "Your session is complete. Take a break!",
      });
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const handlePomodoroClick = () => {
    setTimerType("pomodoro");
    setTime(25 * 60); // 25 minutes for Pomodoro
    setIsRunning(false);
  };

  const handleBreakClick = () => {
    setTimerType("break");
    setTime(5 * 60); // 5 minutes for Break
    setIsRunning(false);
  };

  const handleLongBreakClick = () => {
    setTimerType("longBreak");
    setTime(15 * 60); // 15 minutes for Long Break
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-500 to-teal-500 text-white">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={handlePomodoroClick}
          className="px-4 py-2 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-green-100 transition duration-300"
        >
          Pomodoro
        </button>
        <button
          onClick={handleBreakClick}
          className="px-4 py-2 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-green-100 transition duration-300"
        >
          Break
        </button>
        <button
          onClick={handleLongBreakClick}
          className="px-4 py-2 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-green-100 transition duration-300"
        >
          Long Break
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-black">{timerType === "pomodoro" ? "Pomodoro Timer" : timerType === "break" ? "Break Time" : "Long Break Time"}</h1>
        <div className="text-6xl font-mono mb-6 text-black">{formatTime(time)}</div>
        <button
          onClick={startTimer}
          disabled={isRunning}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition duration-300"
        >
          {isRunning ? "Running..." : "Start"}
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;

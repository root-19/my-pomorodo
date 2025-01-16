// import React from "react";
import { useNavigate } from "react-router-dom";

export default function View() {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/pomorodo");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Pomodoro Timer</h1>
      <p className="text-lg mb-6">
        Stay productive and focused with the Pomodoro technique. Let's get started!
      </p>
      <button
        onClick={handleProceed}
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition duration-300"
      >
        Proceed
      </button>
    </div>
  );
}



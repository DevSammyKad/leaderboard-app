import React, { useState, useEffect } from 'react';

const Stopwatch = ({ onTimeChange }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    onTimeChange(seconds);
  }, [seconds, onTimeChange]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-4">
        {`${Math.floor(seconds / 60)}:${(seconds % 60).toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}`}
      </div>
      <div className="flex justify-center">
        <button
          className={`bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none`}
          onClick={handleToggle}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;

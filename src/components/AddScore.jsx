import React, { useState } from 'react';
import { addScore } from '../services/api';

const AddScore = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the stopwatch is active, if yes, don't submit

    try {
      console.log('Submitting:', { name, time });
      // Send data to the backend
      await addScore({ name, time });

      // Handle success
      console.log('Score added successfully');
      setName('');
      setTime('0');
    } catch (error) {
      // Handle error
      console.error('Error adding score:', error);
    }
  };

  return (
    <div className="bg-slate-400 w-screen h-screen flex justify-center items-center">
      <div className="bg-white shadow-xl p-10 rounded-xl">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="name">Enter player name</label>
          <input
            className="border border-slate-600 outline-none py-2 px-4 rounded-md"
            name="name"
            value={name}
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Player Name"
          />
          <label htmlFor="time">Enter Solve Time</label>
          <input
            className="border border-slate-600 outline-none py-2 px-4 rounded-md"
            type="number"
            placeholder="Enter time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <button
            className="bg-green-500 rounded-lg py-2 px-4 text-white font-semibold hover:bg-green-600 "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddScore;

import React, { useState } from 'react';
import { addScore } from '../services/api';

const AddScore = () => {
  const [name, setName] = useState('');
  // const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [milliseconds, setMilliseconds] = useState('00');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the stopwatch is active, if yes, don't submit

    try {
      // ${hours}:
      const time = `${minutes}:${seconds}.${milliseconds}`;
      console.log('Submitting:', { name, time });

      // Send data to the backend
      await addScore({ name, time });

      // Handle success
      console.log('Score added successfully');
      alert('added');
      setName('');
      // setHours('');
      setMinutes('');
      setSeconds('');
      setMilliseconds('');
    } catch (error) {
      // Handle error
      console.error('Error adding score:', error);
    }
  };

  return (
    <div className="bg-slate-400 w-screen h-screen flex justify-center items-center">
      <div className="bg-white shadow-xl p-10 rounded-xl w-96 h-2/3 justify-center items-center flex ">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <h1 className="font-semibold text-2xl text-center text-red-400 mb-5">
            {' '}
            Age 4 to 6
          </h1>
          <label htmlFor="name">Enter player name</label>
          <input
            className="border focus:border-indigo-500 border-slate-600 outline-none py-2 px-4 rounded-md"
            name="name"
            value={name}
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Player Name"
          />

          <div className="grid gap-4 mt-4">
            <div className="grid gap-2">
              <select
                name=""
                id=""
                className="border focus:border-indigo-500 border-slate-600 outline-none py-2 px-4 rounded-md"
              >
                {' '}
                select
                <option value="2x2">2x2 Cube</option>
                <option value="3x3">3x3 Cube</option>
                <option value="Pyraminx">Pyraminx</option>
                <option value="Mirror Cube">Mirror Cube</option>
                <option value="Cube Relay">Cube Relay</option>
              </select>
            </div>
            {/* <div className="grid gap-2">
              <label htmlFor="hours">Hours</label>
              <input
                className="border focus:border-indigo-500 border-slate-600 outline-none py-2 px-4 rounded-md"
                type="number"
                name="hours"
                value={hours}
                min="0"
                max="23"
                placeholder="00"
                onChange={(e) => setHours(e.target.value)}
                required
              />
            </div> */}

            <div className="grid gap-3">
              {' '}
              <label htmlFor="minutes">Minutes</label>
              <input
                className="border focus:border-indigo-500 border-slate-600 outline-none py-2 px-4 rounded-md"
                type="number"
                name="minutes"
                value={minutes}
                min="0"
                max="59"
                placeholder="00"
                onChange={(e) => setMinutes(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-3">
              {' '}
              <label htmlFor="seconds">Seconds</label>
              <input
                className="border focus:border-indigo-500 border-slate-600 outline-none py-2 px-4 rounded-md"
                type="number"
                name="seconds"
                value={seconds}
                min="0"
                max="59"
                placeholder="00"
                onChange={(e) => setSeconds(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-3">
              {' '}
              <label htmlFor="milliseconds">Milliseconds</label>
              <input
                className="border focus:border-indigo-500 border-slate-600 outline-none py-2 px-4 rounded-md"
                type="number"
                name="milliseconds"
                value={milliseconds}
                min="0"
                max="999"
                placeholder="00"
                onChange={(e) => setMilliseconds(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            className="bg-green-500 rounded-lg py-2  px-4 mt-6 text-white font-semibold hover:bg-green-600"
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

import React, { useState } from 'react';
import { addScore } from '../services/api';

const AddScore = () => {
  const [name, setName] = useState('');

  const [times, setTimes] = useState({
    '3x3': { minutes: '00', seconds: '00', milliseconds: '00' },
    '2x2': { minutes: '00', seconds: '00', milliseconds: '00' },
    'Pyraminx Cube': { minutes: '00', seconds: '00', milliseconds: '00' },
    'Mirror Cube': { minutes: '00', seconds: '00', milliseconds: '00' },
    'Cube Relay': { minutes: '00', seconds: '00', milliseconds: '00' },
  });

  const handleTimeChange = (e, unit, type) => {
    const newValue = e.target.value;

    setTimes((prevTimes) => ({
      ...prevTimes,
      [type]: {
        ...prevTimes[type],
        [unit]: newValue,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedTimes = {
        '3x3': `${times['3x3'].minutes}:${times['3x3'].seconds}.${times['3x3'].milliseconds}`,
        '2x2': `${times['2x2'].minutes}:${times['2x2'].seconds}.${times['2x2'].milliseconds}`,
        'Pyraminx Cube': `${times['Pyraminx Cube'].minutes}:${times['Pyraminx Cube'].seconds}.${times['Pyraminx Cube'].milliseconds}`,
        'Mirror Cube': `${times['Mirror Cube'].minutes}:${times['Mirror Cube'].seconds}.${times['Mirror Cube'].milliseconds}`,
        'Cube Relay': `${times['Cube Relay'].minutes}:${times['Cube Relay'].seconds}.${times['Cube Relay'].milliseconds}`,
      };

      console.log('Submitting:', { name, formattedTimes });

      // Send data to the backend
      // Send data to the backend
      await addScore([{ name, times: formattedTimes }]);

      // Handle success
      console.log('Score added successfully');
      alert('added');
      setName('');
      setTimes({
        '3x3': { minutes: '00', seconds: '00', milliseconds: '00' },
        '2x2': { minutes: '00', seconds: '00', milliseconds: '00' },
        'Pyraminx Cube': { minutes: '00', seconds: '00', milliseconds: '00' },
        'Mirror Cube': { minutes: '00', seconds: '00', milliseconds: '00' },
        'Cube Relay': { minutes: '00', seconds: '00', milliseconds: '00' },
      });
    } catch (error) {
      // Handle error
      console.error('Error adding score:', error);
    }
  };

  return (
    <div className="bg-slate-400 w-screen h-full flex justify-center items-center">
      <div className="bg-white shadow-xl p-10 rounded-xl w-full justify-center items-center flex ">
        <form
          className="flex flex-col gap-3 w-[1000px]"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Enter player Name</label>
          <input
            className="border focus:border-indigo-500 border-slate-600 outline-none py-2 px-4 rounded-md"
            name="name"
            value={name}
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Player Name"
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            {Object.keys(times).map((type) => (
              <div key={type} className="grid gap-5">
                <label htmlFor={`${type}-minutes`}>{type} - Minutes</label>
                <input
                  className="border focus:border-indigo-500 border-slate-600 outline-none py-2 px-4 rounded-md"
                  type="number"
                  name={`${type}-minutes`}
                  value={times[type].minutes}
                  min="0"
                  max="59"
                  placeholder="00"
                  onChange={(e) => handleTimeChange(e, 'minutes', type)}
                  required
                />
                <label htmlFor={`${type}-seconds`}>{type} - Seconds</label>
                <input
                  className="border focus:border-indigo-500 border-slate-600 outline-none py-2 px-4 rounded-md"
                  type="number"
                  name={`${type}-seconds`}
                  value={times[type].seconds}
                  min="0"
                  max="59"
                  placeholder="00"
                  onChange={(e) => handleTimeChange(e, 'seconds', type)}
                  required
                />

                <label htmlFor={`${type}-milliseconds`}>
                  {type} - Milliseconds
                </label>
                <input
                  className="border focus:border-indigo-500 border-slate-600 outline-none py-2 px-4 rounded-md"
                  type="number"
                  name={`${type}-milliseconds`}
                  value={times[type].milliseconds}
                  min="0"
                  max="999"
                  placeholder="00"
                  onChange={(e) => handleTimeChange(e, 'milliseconds', type)}
                  required
                />
                <hr className="bg-black w-full my-10" />
              </div>
            ))}
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

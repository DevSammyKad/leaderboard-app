import React, { useState, useEffect } from 'react';
import crown from '../crown.png';
// import silver from '../silver.png';
import gold from '../first-icon.png';
import silver from '../second-icon.png';
import bronze from '../third-icon.png';
import { getLeaderboard } from '../services/api';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getLeaderboard();
        console.log('Leaderboard data:', result.data);
        setLeaderboard(result.data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="w-full flex max-w-[600px] justify-center items-center mx-auto">
        <div className=" w-full mx-auto bg-gradient-to-tr from-[#8E55D8] to-[#5760E3] shadow-2xl rounded-lg overflow-hidden p-5">
          <h1 className="text-center my-7 font-bold text-yellow-300">
            <img className="text-center mx-auto" src={crown} alt="" />
            Leaderboard
          </h1>
          <div className="flex justify-between my-4">
            <div className="w-40 ">
              <img className="w-40 " src={silver} alt="" />
            </div>
            <div className="w-60 ">
              <img className="w-60 " src={gold} alt="" />
            </div>
            <div className="w-40 ">
              <img className="w-40 " src={bronze} alt="" />
            </div>
          </div>
          <header>
            <ul className="flex justify-between items-start w-[96%] mx-auto text-white font-semibold mt-32">
              <li>Rank</li>
              <li>Player</li>
              <li>2x2 Time</li>
              <li>3x3 Time </li>
              <li>Pyraminx Cube </li>
              <li>Mirror Cube </li>
              <li>Cube Relay </li>
            </ul>
          </header>

          {leaderboard.map((item, index) => (
            <div
              key={index}
              className="relative bg-white bg-opacity-25 shadow-xl
    backdrop-blur-md py-5 my-4 rounded-md hover:scale-105
    cursor-pointer text-white"
            >
              <ul className="flex justify-between mx-4 ">
                <li>{index + 1}</li>
                <li className="text-start">{item.name}</li>
                <li className="text-yellow-300 text-xl text-start ">
                  {item.times?.['2x2'] !== undefined
                    ? item.times['2x2'] !== '00:00.00'
                      ? item.times['2x2']
                      : 'N/P'
                    : 'N/A'}
                </li>
                <li className="text-yellow-300 text-xl text-start ">
                  {item.times?.['3x3'] !== undefined
                    ? item.times['3x3'] !== '00:00.00'
                      ? item.times['3x3']
                      : 'N/P'
                    : 'N/A'}
                </li>
                <li className="text-yellow-300 text-xl text-start ">
                  {item.times?.['Pyraminx Cube'] !== undefined
                    ? item.times['Pyraminx Cube'] !== '00:00.00'
                      ? item.times['Pyraminx Cube']
                      : 'N/P'
                    : 'N/A'}
                </li>
                <li className="text-yellow-300 text-xl text-start ">
                  {item.times?.['Mirror Cube'] !== undefined
                    ? item.times['Mirror Cube'] !== '00:00.00'
                      ? item.times['Mirror Cube']
                      : 'N/P'
                    : 'N/A'}
                </li>
                <li className="text-yellow-300 text-xl text-start ">
                  {item.times?.['Cube Relay'] !== undefined
                    ? item.times['Cube Relay'] !== '00:00.00'
                      ? item.times['Cube Relay']
                      : 'N/P'
                    : 'N/A'}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

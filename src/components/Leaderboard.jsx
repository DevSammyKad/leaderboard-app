import React, { useState, useEffect } from 'react';
import crown from '../crown.png';
import silver from '../silver.png';
import { getLeaderboard } from '../services/api';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getLeaderboard();
      setLeaderboard(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="w-full  flex">
        <div className=" w-[400px] mx-auto bg-gradient-to-tr from-[#8E55D8] to-[#5760E3] shadow-2xl rounded-lg overflow-hidden p-5">
          <h1 className="text-center font-bold text-yellow-300">
            {' '}
            <img className="text-center mx-auto" src={crown} alt="" />
            Leaderboard
          </h1>
          <div className="flex justify-between my-4">
            <div className="w-14 ">
              <img className="w-14 " src={silver} alt="" />
            </div>
            <div className="w-20 ">
              <img className="w-20 " src={silver} alt="" />
            </div>
            <div className="w-14 ">
              <img className="w-14 " src={silver} alt="" />
            </div>
          </div>
          <header>
            <ul className="flex justify-between items-start w-[90%] mx-auto text-white font-semibold">
              <li>Rank</li>
              <li>Player</li>
              <li>Time</li>
            </ul>
          </header>
          {leaderboard.map((item, index) => (
            <div
              key={index}
              className="relative bg-white bg-opacity-25 shadow-xl
              backdrop-blur-md p-5 my-4 rounded-md hover:scale-105
              cursor-pointer text-white"
            >
              <ul className="flex justify-between w-[90%] mx-auto">
                <li>{index + 1}</li>
                <li>{item.name}</li>
                <li className="text-yellow-300 text-xl">{item.time}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

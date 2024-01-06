import React from 'react';
import playersData from '../players';
import crown from '../crown.png';
import silver from '../silver.png';

const DummyPlayer = () => {
  return (
    <div>
      <div className="w-full  flex">
        <div className=" w-full mx-auto bg-gradient-to-tr from-[#8E55D8] to-[#5760E3] shadow-2xl rounded-lg overflow-hidden p-5">
          <h1 className="text-center my-7 font-bold text-yellow-300">
            {' '}
            <img className="text-center mx-auto" src={crown} alt="" />
            Leaderboard
          </h1>
          <div className="flex justify-between my-4">
            <div className="w-40 ">
              <img className="w-40 " src={silver} alt="" />
            </div>
            <div className="w-60 ">
              <img className="w-60 " src={silver} alt="" />
            </div>
            <div className="w-40 ">
              <img className="w-40 " src={silver} alt="" />
            </div>
          </div>
          <header>
            <ul className="flex justify-between items-start w-[96%] mx-auto text-white font-semibold mt-32">
              <li>Rank</li>
              <li>Player</li>
              <li>2x2 Time</li>
              <li>3x3 Time</li>
              <li>Pyraminx Cube </li>
              <li>Mirror Cube </li>
              <li>Cube Relay </li>
            </ul>
          </header>
          {playersData.players.map((item, index) => (
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
                  {item.time['2x2']}
                </li>
                <li className="text-yellow-300 text-xl text-start ">
                  {item.time['3x3']}
                </li>
                <li className="text-yellow-300 text-xl text-start ">
                  {item.time['Pyraminx Cube']}
                </li>
                <li className="text-yellow-300 text-xl text-start ">
                  {item.time['Mirror Cube']}
                </li>
                <li className="text-yellow-300 text-xl text-start ">
                  {item.time['Cube Relay']}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DummyPlayer;

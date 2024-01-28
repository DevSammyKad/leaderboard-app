import React, { useState, useEffect } from 'react';
import crown from '../crown.png';
import gold from '../first-icon.png';
import silver from '../second-icon.png';
import bronze from '../third-icon.png';
import { getLeaderboard } from '../services/api';

const FourthLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [currentEvent, setCurrentEvent] = useState('3x3');
  const [isSorting, setIsSorting] = useState(false);

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

  const handleSort = async (event) => {
    if (isSorting) {
      // If sorting is already in progress, return
      return;
    }

    setIsSorting(true); // Set sorting status to true

    let sortedLeaderboard;
    try {
      // Sort the leaderboard based on the selected event's solve time
      sortedLeaderboard = [...leaderboard].sort((a, b) => {
        const timeA =
          a.times[event] !== '00:00.00' ? a.times[event] : '99:59.999';
        const timeB =
          b.times[event] !== '00:00.00' ? b.times[event] : '99:59.999';
        return timeA < timeB ? -1 : 1;
      });

      setLeaderboard(sortedLeaderboard);
      setSortBy(event); // Update the current sorting order
      setCurrentEvent(event); // Update the current event for displaying solve times
    } catch (error) {
      console.error('Error sorting leaderboard:', error);
    } finally {
      setIsSorting(false); // Reset sorting status to false
    }
  };

  // Get the first three students in the '8-12' age category
  const filteredLeaderboard = leaderboard.filter((item) => item.age === '6-12');
  const goldStudent =
    filteredLeaderboard.length > 0 ? filteredLeaderboard[0] : null;
  const silverStudent =
    filteredLeaderboard.length > 1 ? filteredLeaderboard[1] : null;
  const bronzeStudent =
    filteredLeaderboard.length > 2 ? filteredLeaderboard[2] : null;

  return (
    <div>
      <div className="w-full flex max-w-[600px] justify-center items-center mx-auto">
        <div className="w-full mx-auto bg-gradient-to-tr from-[#8E55D8] to-[#5760E3] shadow-2xl rounded-lg overflow-hidden p-5">
          <h1 className="text-center my-7 font-bold text-yellow-300">
            <img className="text-center mx-auto" src={crown} alt="" />
            Leaderboard
          </h1>
          <div className="flex justify-between my-4 mx-4">
            <div className="w-28 ">
              <img className="w-28" src={silver} alt="" />
              {silverStudent && (
                <h1 className="text-sm font-medium  text-center text-blue-500 bg-white rounded-md py-2 px-4">
                  {silverStudent.name} {/* Second place */}
                </h1>
              )}
            </div>
            <div className="w-48 ">
              <img className="w-48" src={gold} alt="" />
              {goldStudent && (
                <h1 className="text-sm font-medium text-center text-blue-500 bg-white rounded-md py-2 px-4">
                  {goldStudent.name} {/* First place */}
                </h1>
              )}
            </div>
            <div className="w-28 ">
              <img className="w-28" src={bronze} alt="" />
              {bronzeStudent && (
                <h1 className="text-sm font-medium text-center text-blue-500 bg-white rounded-md py-2 px-4">
                  {bronzeStudent.name} {/* Third place */}
                </h1>
              )}
            </div>
          </div>
          <div className="flex justify-start mt-32 ">
            <div className="bg-white rounded-lg py-2 px-4">
              <h1 className="text-base my-2 mx-4 font-bold text-blue-500">
                Select Your Event : Age 6-12
              </h1>
              <button
                onClick={() => handleSort('Mirror Cube')}
                className="mx-4"
              >
                Mirror Cube ( {sortBy === 'Mirror Cube' ? '▼' : '▲'})
              </button>
              <button onClick={() => handleSort('Cube Relay')} className="mx-4">
                Cube Relay ( {sortBy === 'Cube Relay' ? '▼' : '▲'})
              </button>
            </div>
          </div>
          <header>
            <ul className="flex justify-between items-start w-[96%] mx-auto text-white font-semibold mt-10 ">
              <li>Rank</li>
              <li>Player</li>
              <li>{sortBy} Time</li>
            </ul>
          </header>
          {leaderboard
            .filter((item) => item.age === '6-12')
            .map((item, index) => (
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
                    {item.times?.[currentEvent] !== undefined
                      ? item.times[currentEvent] !== '00:00.00'
                        ? item.times[currentEvent]
                        : '--:--.--'
                      : '99:59.999'}
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FourthLeaderboard;

import './App.css';
import Leaderboard from './components/Leaderboard';
import AddScore from './components/AddScore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DummyPlayer from './components/DummyPlayer';
import FirstLeaderboard from './components/FirstLeaderboard';
import SecondLeaderboard from './components/SecondLeaderboard';
import ThirdLeaderboard from './components/ThirdLeaderboard';
import FourthLeaderboard from './components/FourthLeaderboard';
import FifthLeaderboard from './components/FifthLeaderboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/add" element={<AddScore />} />
        <Route path="/DummyPlayer" element={<DummyPlayer />} />
        <Route path="/" element={<FirstLeaderboard />} />
        <Route path="/SecondLeaderboard" element={<SecondLeaderboard />} />
        6-8 age
        <Route path="/ThirdLeaderboard" element={<ThirdLeaderboard />} />
        8-12 age
        <Route path="/FourthLeaderboard" element={<FourthLeaderboard />} />
        6-12 age
        <Route path="/FifthLeaderboard" element={<FifthLeaderboard />} />
        above
      </Routes>
    </BrowserRouter>
  );
}

export default App;

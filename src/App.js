import './App.css';
import Leaderboard from './components/Leaderboard';
import AddScore from './components/AddScore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DummyPlayer from './components/DummyPlayer';
import FirstLeaderboard from './components/FirstLeaderboard';
import SecondLeaderboard from './components/SecondLeaderboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/add" element={<AddScore />} />
        <Route path="/DummyPlayer" element={<DummyPlayer />} />
        <Route path="/" element={<FirstLeaderboard />} />
        <Route path="/SecondLeaderboard" element={<SecondLeaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Leaderboard from './components/Leaderboard';
import AddScore from './components/AddScore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DummyPlayer from './components/DummyPlayer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/add" element={<AddScore />} />
        <Route path="/dummy" element={<DummyPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

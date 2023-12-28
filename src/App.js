import './App.css';
import Leaderboard from './components/Leaderboard';
import AddScore from './components/AddScore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/add" element={<AddScore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

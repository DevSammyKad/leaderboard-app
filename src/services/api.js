import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Update with your server's URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const addScore = (data) => api.post('/addScore', data);
export const getLeaderboard = () => {
  return api.get('/leaderboard').then((res) => {
    return {
      data: res.data.sort((a, b) => a.time - b.time),
    };
  });
};
export default api;

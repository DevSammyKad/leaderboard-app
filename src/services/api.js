import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Update with your server's URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const addScore = (data) => api.post('/addScore', data);

export const getLeaderboard = async () => {
  try {
    const res = await api.get('/leaderboard');
    return {
      data: res.data,
    };
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};
export default api;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

// MongoDB connection
const uri = process.env.MONGODB_URI; // MongoDB Atlas connection string from your .env file
mongoose.connect(uri);

console.log(mongoose.connection.host);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const leaderboardSchema = new mongoose.Schema({
  name: String,
  age: String,
  times: {
    '3x3': String,
    '2x2': String,
    'Pyraminx Cube': String,
    'Mirror Cube': String,
    'Cube Relay': String,
  },
});

const Leaderboard = mongoose.model('Player', leaderboardSchema, 'players');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/addScore', async (req, res) => {
  console.log('Received request:', req.body);

  try {
    const players = req.body;

    await Promise.all(
      players.map(async (player) => {
        const { name, age, times } = player;
        console.log('Processing player:', { name, age, times });

        const newScore = new Leaderboard({
          name,
          age,
          times,
        });

        await newScore.save();
      })
    );

    res.status(200).json({ message: 'Scores added successfully' });
  } catch (error) {
    console.error('Error adding scores:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/leaderboard', async (req, res) => {
  try {
    console.log('Attempting to retrieve leaderboard data');
    const leaderboardData = await Leaderboard.find({}, '-_id -__v');
    console.log('Leaderboard data retrieved successfully:', leaderboardData);
    res.json(leaderboardData);
  } catch (error) {
    console.error('Error retrieving leaderboard data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

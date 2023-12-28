// Import necessary modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/leaderboard');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const leaderboardSchema = new mongoose.Schema({
  name: String,
  time: String,
});

const Leaderboard = mongoose.model(
  'Leaderboard',
  leaderboardSchema,
  'leaderboard.data'
);
// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Log incoming requests for the /addScore endpoint
app.post('/addScore', async (req, res) => {
  console.log('Received request:', req.body);

  // Save the score data to the MongoDB collection
  try {
    const { name, time } = req.body;

    // Create a new leaderboard entry
    const newScore = new Leaderboard({
      name,
      time,
    });

    // Save the entry to the database
    await newScore.save();

    // Respond with a success message
    res.status(200).json({ message: 'Score added successfully' });
  } catch (error) {
    // Handle errors and respond with an error message
    console.error('Error adding score:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Retrieve leaderboard data
app.get('/Leaderboard', async (req, res) => {
  try {
    const leaderboardData = await Leaderboard.find({}, '-_id -__v').sort({
      time: 1,
    });

    res.json(leaderboardData); // Send JSON response
  } catch (error) {
    console.error('Error retrieving leaderboard data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

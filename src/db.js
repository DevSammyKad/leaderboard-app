const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/leaderboard';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;

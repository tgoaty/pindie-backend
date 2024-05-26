const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/Pindie';

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URL);
    console.log('Connect is OK')
  }
  catch (err) {
    console.log('Connection Error')
    console.error(err);
  }
}

module.exports = connectToDatabase;
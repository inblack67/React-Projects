const express = require('express');
const dotenv = require('dotenv');
require('colors');

const app = express();

dotenv.config({ path: './config/config.env' });

// mongodb
const connectDB = require('./config/db');
connectDB();

// bodyparser middleware
app.use(express.json());

const PORT = process.env.PORT || 5001;
app.listen(PORT, (req, res) => {
  console.log(`Server started on port ${PORT}`.blue.bold);
});
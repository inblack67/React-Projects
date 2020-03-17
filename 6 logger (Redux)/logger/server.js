const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middlewares/error');
require('colors');

const app = express();

dotenv.config({ path: './config/config.env' });

const connectDB = require('./config/db');
connectDB();

const logs = require('./routes/logs');
const techs = require('./routes/techs');

app.use(express.json());



app.use('/logs', logs);
app.use('/techs', techs);

const PORT = process.env.PORT || 5000;

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`.blue.bold);
});
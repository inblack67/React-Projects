const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middlewares/error');
require('colors');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

// load routes
const users = require('./routes/users');
const contacts = require('./routes/contacts');
const auth = require('./routes/auth');

dotenv.config({ path: './config/config.env' });

// mongodb
const connectDB = require('./config/db');
connectDB();

// bodyparser middleware
app.use(express.json());

// cookie parser
app.use(cookieParser());


// use routes
app.use('/api/users',users);
app.use('/api/contacts',contacts);
app.use('/api/auth',auth);

app.use(errorHandler);


// server react in prod
if(process.env.NODE_ENV === 'production')
{
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, (req, res) => {
  console.log(`Server started on port ${PORT}`.blue.bold);
});

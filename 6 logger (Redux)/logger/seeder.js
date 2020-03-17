const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Log = require('./models/Log');
const Tech = require('./models/Tech');
require('colors');

dotenv.config({ path: './config/config.env' });

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

const deleteData = async () => {
  await Tech.deleteMany();
  await Log.deleteMany();
  console.log(`Data Destroyed`.red.inverse);
  process.exit();
}

if(process.argv[2] === '-d')
{
  deleteData();
}

connectDB();


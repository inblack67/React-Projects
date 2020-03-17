const mongoose = require('mongoose');
require('colors');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  console.log(`Mongo is here`.green.bold);
}

module.exports = connectDB;
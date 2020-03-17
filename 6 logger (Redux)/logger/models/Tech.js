const mongoose = require('mongoose');

const TechSchema = mongoose.Schema({

  fullName: {
    type: String,
    required: [true, 'You must add your full name']
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Tech', TechSchema);
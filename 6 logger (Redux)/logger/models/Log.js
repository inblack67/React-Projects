const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({

  tech: {
    type: mongoose.Schema.ObjectId,
    ref: 'Tech'
  },

  techName: {
    type: String
  },

  message: {
    type: String,
    required: [true, 'You must add a message']
  },

  attention: {
    type: Boolean,
    default: false
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Log', LogSchema);
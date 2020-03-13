const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: [true, 'You must add a contact name']
  },
  email: {
    type: String,
    required: [true, 'You must add a contact email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'You must add a valid email'
    ]
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    enum: ['personal', 'professional'],
    default: 'personal'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Contact', ContactSchema);
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  category: String,
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: String,
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Post', postSchema);

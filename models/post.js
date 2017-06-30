const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  description: String,
  name: String,
  phone: String,
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Post', postSchema);

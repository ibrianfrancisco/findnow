const Post = require('../models/post');

module.exports = {
  createPost
}

function createPost(req, res, next) {
  Post.create(req.body)
  .then(post =>res.json(post))
  .catch(err => res.status(500).json(err));
}

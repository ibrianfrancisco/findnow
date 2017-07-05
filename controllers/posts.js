const Post = require('../models/post');

module.exports = {
  getAllPosts,
  getPost,
  createPost
}

function getAllPosts(req, res, next) {
  Post.find({})
  .then(posts => res.json(posts))
  .catch(err => res.status(500).json(err));
}

function getPost(req, res, next) {
  Post.findById(req.params.id)
  .then(post => res.json(post))
  .catch(err => res.status(500).json(err));
}

function createPost(req, res, next) {
  Post.create(req.body)
  .then(post =>res.json(post))
  .catch(err => res.status(500).json(err));
}

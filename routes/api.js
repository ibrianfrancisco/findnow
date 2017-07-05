var express = require('express');
var router = express.Router();
const postCtrl = require('../controllers/posts');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/posts', postCtrl.getAllPosts);
router.get('/posts/:id', postCtrl.getPost);
router.post('/posts', postCtrl.createPost);


module.exports = router;

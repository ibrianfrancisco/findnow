var express = require('express');
var router = express.Router();
const postCtrl = require('../controllers/posts');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/posts', postCtrl.createPost);

module.exports = router;

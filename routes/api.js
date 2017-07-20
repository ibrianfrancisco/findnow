const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
const postCtrl = require('../controllers/posts');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// Public routes (no auth required)
router.post('/users/login', userCtrl.login);
router.get('/users/logout', userCtrl.logout);
router.post('/users', userCtrl.create);
router.get('/users/me', userCtrl.me);

// Auth middleware (routes below need authentication)
router.use(function(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
});

router.get('/posts', postCtrl.getAllPosts);
router.get('/posts/:id', postCtrl.getPost);
router.post('/posts', postCtrl.createPost);


module.exports = router;

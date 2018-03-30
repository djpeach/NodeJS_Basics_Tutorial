var express = require('express');
var router = express.Router();
const Post = require('../models/post_model');

/* GET home page. */
router.get('/', (req, res) => {
  Post.find().exec().then((all_posts) => {
    res.render('index', {posts: all_posts})
  }).catch(() => {
    res.render('index', {error: "There was an error loading posts from the database."})
  });
});

router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    message: req.body.message
  }).then(() => {
    Post.find().exec().then((all_posts) => {
      res.render('index', {posts: all_posts})
    }).catch(() => {
      res.render('index', {error: "There was an error loading posts from the database."})
    });
  }).catch(() => {
    res.render('index', {error: "There was an error creating your new post"})
  });
});

router.post('/deletePost', (req, res) => {
  Post.findByIdAndRemove(req.body.post_id).exec().then(() => {
    Post.find().exec().then((all_posts) => {
      res.render('index', {posts: all_posts})
    }).catch(() => {
      res.render('index', {error: "There was an error loading posts from the database."})
    });
  }).catch(() => {
    res.render('index', {error: "There was an error deleting your post"});
  });
});

router.get('/editPost', (req, res) => {
  Post.findById(req.query.post_id).exec().then((post) => {
    let postForm = {
      postTitle: post.title,
      postMessage: post.message,
      postId: post._id
    }
    Post.find().exec().then((all_posts) => {
      res.render('index', {posts: all_posts, postForm: postForm})
    }).catch(() => {
      res.render('index', {error: "There was an error loading posts from the database."})
    });
  });
});

router.post('/editPost', (req, res) => {
  console.log(req.body.post_id);
  Post.findByIdAndUpdate(req.body.post_id, {title: req.body.editedTitle, message: req.body.editedMessage}).exec().then(() => {
    Post.find().exec().then((all_posts) => {
      res.render('index', {posts: all_posts})
    }).catch(() => {
      res.render('index', {error: "There was an error loading posts from the database."})
    });
  }).catch(() => {
    res.render('index', {error: "There was an error updating your post"})
  });
});

module.exports = router;

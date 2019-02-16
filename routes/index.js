const express = require('express');
const router = express.Router();

// imports of my database connection and usermodel
const db = require('../models/db');
const userModel = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* ----- GET signin ------ */
router.get('/signin', (req, res, next) => {
  console.log('signin is running...');
  userModel.findOne({
    email: req.query.email,
    password: req.query.password
  }, (error, user) => {
    if (!user) {
      res.json({result: false, isUserExist: false});
    } else {
      console.log(user)
      res.json({result: true, isUserExist: true, user});
    }
  });
});

/* ----- POST signup ------ */
router.post('/signup', function(req, res, next) {
    console.log('Signup is running...');
    const newUser = new userModel({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    });
    newUser.save(function(error, user) {
      res.json({result: true, user});
    });
});


module.exports = router;

const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.post('/users', function(req, res) {
  models.User.create({
    email: req.body.email,
  }).then(function(user) {
    res.json(user);
  });
});

// get all users
router.get('/users', function(req, res) {
  models.User.findAll({}).then(function(users) {
    res.json(users);
  });
});

router.get('/meetups', function(req, res) {
  models.Meetup.findAll({}).then(function(meetups) {
    res.json(meetups);
  });
});

// // get single todo
// router.get('/todo/:id', function(req, res) {
//   models.Todo.find({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(todo) {
//     res.json(todo);
//   });
// });
// 
// // add new todo
// router.post('/users', function(req, res) {
//   models.Todo.create({
//     title: req.body.title,
//     UserId: req.body.user_id
//   }).then(function(todo) {
//     res.json(todo);
//   });
// });
// 
// // update single todo
// router.put('/todo/:id', function(req, res) {
//   models.Todo.find({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(todo) {
//     if(todo){
//       todo.updateAttributes({
//         title: req.body.title,
//         complete: req.body.complete
//       }).then(function(todo) {
//         res.send(todo);
//       });
//     }
//   });
// });
// 
// // delete a single todo
// router.delete('/todo/:id', function(req, res) {
//   models.Todo.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(todo) {
//     res.json(todo);
//   });
// });

module.exports = router;

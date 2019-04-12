const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.post('/users', function(req, res) {
  models.User.create({
    name: req.body.name,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    active: req.body.active,
    type: req.body.type,
  }).then(function(user) {
    res.json(user);
  });
});

router.get('/users', function(req, res) {
  models.User.findAll({}).then(function(users) {
    res.json(users);
  });
});

router.get('/meetups', function(req, res) {
  models.MeetupGroup.findAll({}).then(function(meetupgroups) {
    res.json(meetupgroups);
  });
});

router.get('/users/:id', function(req, res) {
  models.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(user) {
    res.json(user);
  });
});
 
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

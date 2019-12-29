const express = require('express');
const router = express.Router();
const middleware = require('../middleware/jwtMiddleware.js');
const authenticate = require('./authenticate');
const users = require('./users');
const meetups = require('./meetups');

router.get('/', function(req, res, next) {
  res.json({ api: 'v0.1.0' });
});

// ******* authentication ******** //
router.get('/authenticate', authenticate.authenticateUser);
router.get('/login', authenticate.loginUser);

// ******* users ******** //
router.get('/users', middleware.checkToken, users.getUsers);
router.post('/users', users.createUser);
router.delete('/users/:id', middleware.checkToken, users.deleteUser);

// ******* meetups ******** //
router.get('/meetups', meetups.getMeetups);
router.post('/meetups', middleware.checkToken, meetups.createMeetups);

module.exports = router;

// ************* notes
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
//
// router.get('/users/:id', middleware.checkToken, function(req, res) {
//   models.User.findOne({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(user) {
//     res.json(user);
//   });
// });

const express = require('express');
const router = express.Router();
const models = require('../models/index');
const middleware = require('../middleware/jwtMiddleware.js');
const HandlerGenerator = require('../helpers/jwtGenerator.js');

const handlers = new HandlerGenerator();


// HERE HERE HERE

//  // Routes & Handlers
//  app.post('/login', handlers.login);
//  app.get('/', middleware.checkToken, handlers.index);
//  app.listen(port, () => console.log(`Server is listening on port: ${port}`));

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

router.get('/users/:id', function(req, res) {
  models.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(user) {
    res.json(user);
  });
});

router.get('/meetups', function(req, res) {
  models.MeetupGroup.findAll({}).then(function(meetupgroups) {
    res.json(meetupgroups);
  });
});

router.post('/meetups', function(req, res) {
  models.MeetupGroup.create({
    name: req.body.name,
    address_line_1: req.body.address_line_1,
    address_line_2: req.body.address_line_2,
    address_line_3: req.body.address_line_3,
    address_line_4: req.body.address_line_4,
    city: req.body.city,
    state: req.body.state,
    state_abbr: req.body.state_abbr,
    postal_code: req.body.postal_code,
    country: req.body.country,
    organizer: req.body.organizer,
    organizer_id: req.body.organizer_id,
    url: req.body.url,
    sponsors: req.body.sponsors,
    contact_email: req.body.contact_email,
    contact_ph: req.body.contact_ph 
  }).then(function(meetupGroup) {
    res.json(meetupGroup);
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

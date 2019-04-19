const express = require('express');
const router = express.Router();
const models = require('../models/index');
const middleware = require('../middleware/jwtMiddleware.js');
const authenticate = require('./authenticate');

router.get('/', function(req, res, next) {
  res.json({ api: 'v0.1.0' });
});

router.get('/authenticate', function(req, res){
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  const jwtKey = middleware.getToken(token);

  res.json({
    jwtKey
  });
});

router.post('/users', middleware.checkToken, function(req, res) {
  console.log('req', req.body);
  const {
    first_name,
    last_name,
    email,
    address_line_1,
    address_line_2,
    address_line_3,
    address_line_4,
    city,
    state,
    state_abbr,
    postal_code,
    country,
    preferred_contact,
    ph_number,
    website,
    opt_in,
    active,
    type
  } = req.body;

  const name = `${first_name} ${last_name}`;

  models.User.create({
    name: name,
    first_name: first_name,
    last_name: last_name,
    email: email,
    address_line_1: address_line_1,
    address_line_2: address_line_2,
    address_line_3: address_line_3,
    address_line_4: address_line_4,
    city: city,
    state: state,
    state_abbr: state_abbr,
    postal_code: postal_code,
    country: country,
    preferred_contact: preferred_contact,
    ph_number: ph_number,
    website: website,
    opt_in: opt_in,
    active: active,
    type: type,
  }).then(function(user) {

    res.json(user);
  });
});

router.get('/users', middleware.checkToken, function(req, res) {
  models.User.findAll({}).then(function(users) {
    res.json(users);
  });
});

router.get('/users/:id', middleware.checkToken, function(req, res) {
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

router.post('/meetups', middleware.checkToken, function(req, res) {
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


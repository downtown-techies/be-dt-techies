const express = require('express');
const router = express.Router();
const middleware = require('../middleware/jwtMiddleware.js');
const authenticate = require('./authenticate');
const users = require('./users');
const account = require('./account');
const meetups = require('./meetups');

router.get('/', function(req, res, next) {
  res.json({ api: 'v0.1.0' });
});

// ******* authentication ******** //
router.get('/authenticate', authenticate.authenticateUser);
router.post('/login', authenticate.loginUser);

// ******* users ******** //
router.get('/users', middleware.checkAdmin, users.getUsers);
router.post('/users', users.createUser);
router.delete('/users/:id', middleware.checkAdmin, users.deleteUser);

// ******* account ******** //
router.get('/accounts', middleware.checkAdmin, account.getAccounts);
router.post('/create_account', account.createAccount);
router.delete('/delete_account/:id', middleware.checkAdmin, account.deleteAccount);

// ******* meetups ******** //
router.get('/meetups', meetups.getMeetups);
// fix below
// router.post('/meetups', middleware.checkToken, meetups.createMeetups);

module.exports = router;

const express = require('express');
const router = express.Router();
const middleware = require('../middleware/jwtMiddleware.js');
const authenticate = require('./authenticate');
const users = require('./users');
const account = require('./account');
const meetups = require('./meetups');
const tickets = require('./tickets');

router.get('/', function(req, res, next) {
  res.json({ api: 'v0.1.0' });
});

// ******* authentication ******** //
router.get('/authenticate', authenticate.authenticateUser);
router.post('/login', authenticate.loginUser);
router.post('/reset', authenticate.resetPassword);

// ******* users ******** //
router.get('/users', middleware.checkAdmin, users.getUsers);
router.get('/user/account_info/:id', middleware.checkToken, users.getUserById);
router.post('/user_add', users.createUser);
router.post('/user/update/:id', middleware.checkToken, users.updateUser);
router.delete('/user/delete/:id', middleware.checkAdmin, users.deleteUser);

// ******* account ******** //
router.get('/accounts', middleware.checkAdmin, account.getAccounts);
router.post('/create_account', account.createAccount);
router.delete('/delete_account/:id', middleware.checkAdmin, account.deleteAccount);

// ******* meetups ******** //
router.get('/meetups', meetups.getMeetups);

// ******* meetups ******** //
router.post('/tickets', tickets.createTicket);
router.get('/tickets', tickets.getTickets);

// fix below
// router.post('/meetups', middleware.checkToken, meetups.createMeetups);

module.exports = router;

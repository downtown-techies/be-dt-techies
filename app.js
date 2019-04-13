const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
let jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;
const routes = require('./routes/index.js');

let config = require('./config/jwtConfig.js');
let middleware = require('./middleware/jwtMiddleware.js');

dotenv.config();

app.use(cookieParser());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', routes);

module.exports = app;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
let jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/index.js');

let middleware = require('./middleware/jwtMiddleware.js');

dotenv.config();

app.use(cors(), bodyParser.urlencoded({
  extended: true
}));

app.use('/', routes);

module.exports = app;

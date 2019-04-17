const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
let jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/index.js');

let middleware = require('./middleware/jwtMiddleware.js');

//config
dotenv.config();

//app.uses
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// routes
app.use('/', routes);

module.exports = app;

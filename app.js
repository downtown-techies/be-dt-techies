const express = require('express')
 , app = express()
 , routes = require('./routes/index.js')
 , bodyParser = require('body-parser')
 , cookieParser = require('cookie-parser')
 , dotenv = require('dotenv')
 , cors = require('cors')
 ;

let jwt = require('jsonwebtoken')
 , middleware = require('./middleware/jwtMiddleware.js');

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

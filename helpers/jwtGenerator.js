const bodyParser = require('body-parser');

let jwt = require('jsonwebtoken');
let publicKey = process.env.UUID_PUBLIC;

module.exports = class HandlerGenerator {

  login (req, res) {
    res.send(400).json({
      success: false,
      message: 'Authentication failed! Please check the request'
    });
  }
}

const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

module.exports = function generateToken(uuid) {
  if (uuid !== undefined) {
    return token = jwt.sign({}, uuid, {
      expiresIn: 3600 
    });
  };
}

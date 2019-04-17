const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const publicKey = process.env.PUBLIC_KEY;
const { getToken } = require('../middleware/jwtMiddleware');

module.exports = function authenticate(authKey) {
  if (authKey !== undefined && authKey === publicKey) {
    const jwtKey = getToken(); 

    return {
      jwtKey: jwtKey 
    }
  } else if (authKey !== undefined && authKey !== publicKey) {
    return {
      errorMessage: 'Incorrect Authentication Key'
    }
  } 
  else {
    return {
      errorMessage: 'Auth Key must be supplied'
    }
  }
}


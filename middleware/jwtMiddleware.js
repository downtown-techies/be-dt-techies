const uuidv1 = require('uuid/v1');
const generateToken = require('../helpers/jwtGenerator.js');
const jwt = require('jsonwebtoken');

const v1options = {
  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
  clockseq: 0x1234,
  msecs: new Date().getTime(),
  nsecs: 5678
};

const uuid = uuidv1(v1options);
 
const getToken = (err) => {
  if (err) throw err;

  return generateToken(uuid);
};

const checkToken = (req, res, next) => {
  let token = req.body['authorization'] || req.headers['authorization'];

  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, uuid, (err, decoded) => {
      if (err) {
        console.log(err);

        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth Token must be supplied'
    });
  }
};

module.exports = {
  getToken: getToken,
  checkToken: checkToken
}

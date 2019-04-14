let jwt = require('jsonwebtoken');
const publicKey = process.env.UUID_PUBLIC;

// future

// const uuidv1 = require('uuid/v1');
// 
// const v1options = {
//   node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
//   clockseq: 0x1234,
//   msecs: new Date().getTime(),
//   nsecs: 5678
// };
// 
// console.log(uuidv1(v1options));

let checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, publicKey, (err, decoded) => {
      if (err) {
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
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = {
  checkToken: checkToken
}

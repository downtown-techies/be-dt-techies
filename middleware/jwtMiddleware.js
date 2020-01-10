const jwt = require('jsonwebtoken');

const getToken = (params) => {
  const {
    key, 
    id, 
    username,
    accountType,
    accountId
  } = params;

  const userInfo = {
    accountId: accountId,
    username: username,
    accountType: accountType
  }

  let token;

  if (key !== undefined) {
    return token = jwt.sign({data: userInfo}, key, {
      expiresIn: 3600
    });
  };
};

const checkToken = (req, res, next) => {
  let token = req.body['authorization'] || req.headers['authorization'];

  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, process.env.PUBLIC_KEY, (err, decoded) => {
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

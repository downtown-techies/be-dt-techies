const middleware = require('../../middleware/jwtMiddleware.js');

module.exports = {
  authenticateUser: function(req, res){
    let token = req.headers.authorization;
  
    if (token && token.startsWith('Bearer ')) {
      token = token.replace('Bearer ', '');
    }
  
    const jwtKey = middleware.getToken(token);
  
    res.json({
      jwtKey
    });
  },
  loginUser: function(req, res){
    let token = req.headers.authorization;
  
    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
  
    const jwtKey = middleware.getToken(token);
  
    res.json({
      //jwtKey
    });
  }
}

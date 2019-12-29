const middleware = require('../../middleware/jwtMiddleware.js');
const models = require('../../models/index');
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;

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
    const {
      username,
      password
    } = req.body;

    let account_id, account_type;

    console.log('body: ', req.body);
    console.log('username: ', username);
    console.log('password: ', password);

    models.UserLogin.findOne({
      where: {
        username: username,
      }
    }).then(function(resulte){
      console.log(true);
    })
  }
}

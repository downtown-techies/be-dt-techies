const middleware = require('../../middleware/jwtMiddleware.js');
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

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

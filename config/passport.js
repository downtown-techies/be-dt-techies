const models = require('../models/index');

passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    models.UserLogin.findOne({
      where: { username: username }
    }).then((user) => {
      console.log(user);
      if (!user) {
        return done(null, false, { message: 'Incorrect User/Password' });
      }
      if(user.password !== password){
        return done(null, false, { message: 'Incorrect User/Password' });
      }
      return done(null, user, { message: 'username' } );
    })
  }
));

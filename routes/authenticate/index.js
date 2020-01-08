const middleware = require('../../middleware/jwtMiddleware.js');
const models = require('../../models/index');
const passport = require('passport');

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
  loginUser: passport.authenticate('local',
    function(req, res, next) {
      console.log('req: ', req);
      console.log('res: ', res);
      console.log('next: ', next);
      // return res;
    }
  )
  //   successRedirect: '/accessed',
  //   failureRedirect: '/access',
  //   session: false
  //
  
}


  // ******************
  // code holding cell
  // ******************

  // loginUser: function(req, res){
  //   const {
  //     username,
  //     password
  //   } = req.body;

  //   let account_id, account_type;

  //   models.UserLogin.findOne({
  //     where: {
  //       username: username,
  //     }
  //   }).then(function(results){
  //     if (results === null){
  //       console.log('user does not exist');
  //       return;
  //     } else if (password === results.password){
  //       console.log(true);
  //       res.json({
  //         accountId: account_id,
  //         accountType: account_type,
  //       });
  //       return;
  //     }
  //     console.log(false);
  //     return;
  //   })
  // }

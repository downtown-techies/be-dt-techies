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
  loginUser: function(req, res) {
    const {
      username: userUserName
      , password: userPW} = req.body;

    models.UserLogin.findOne({
      where: { username: userUserName }
    }).then((user) => {
      const username = user && user.username;
      const password = user && user.password;

      if (!user) {
        res.status(200).json({
          error: 1,
          message: 'Incorrect username/password' 
        });
        return;
      }
      if(password !== userPW){
        res.status(200).json({
          error: 1,
          message: 'Incorrect username/password' 
        });
        return
      }
      const { id
        , account_type: accountType
        , account_id: accountId
      } = user;
      const responseBody = {
        'id': id,
        'username': username,
        'accountType': accountType,
        'accountId': accountId,
      }
      res.json(responseBody);
    })
  }
}

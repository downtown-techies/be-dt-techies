const middleware = require('../../middleware/jwtMiddleware.js');
const models = require('../../models/index');
const passport = require('passport');
const bcrypt = require('bcrypt');

module.exports = {
  authenticateUser: function(req, res){
    return
  },
  loginUser: function(req, res) {
    const {
      username: userUserName
      , password: userPW
      , key
    } = req.body;

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
      } else if (bcrypt.compareSync(userPW, password)) {

        const { 
          id
          , account_type: accountType
          , account_id: accountId
        } = user;

        const params = {
          'key': key,
          'id': id,
          'username': username,
          'accountType': accountType,
          'accountId': accountId,
        }

        const jwtKey = middleware.getToken(params);

        res.status(200).json(jwtKey);
      } else {
        res.status(200).json({
          error: 1,
          message: 'Incorrect username/password' 
        });
        return
      }
    })
  },
  resetPassword: function(req, res) {
    const {
      username: userUserName
      , oldPassword
      , newPassword
      , key
    } = req.body;

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
      } else if (bcrypt.compareSync(oldPassword, password)) {
        const { 
          id
          , account_type: accountType
          , account_id: accountId
        } = user;

        const params = {
          'key': key,
          'id': id,
          'username': username,
          'oldPassword': oldPassword,
          'newPassword': newPassword,
          'accountType': accountType,
          'accountId': accountId,
          'message': 'Updated successfully',
        }
        const hash = bcrypt.hashSync(newPassword, 14);

        models.UserLogin.update({
          password: hash,
        }, {
          where: {
            id: id
          }
        }).then(function(user){
          console.log('hit here')
          const jwtKey = middleware.getToken(params);
          res.status(200).json(jwtKey);
        })
      } else {
        res.status(200).json({
          error: 1,
          message: 'Incorrect username/password' 
        });
      }
    })
  }
}

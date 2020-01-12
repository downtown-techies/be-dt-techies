const models = require('../../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  getAccounts: function(req, res) {
    models.UserLogin.findAll({}).then(function(accounts) { res.json(accounts)
    });
  },
  createAccount: function(req, res) {
    const {
      email,
      password,
      type = 'user',
      username,
    } = req.body;

    if (password.length < 10) {
      res.end(JSON.stringify({
        userCreation: false
        , message: 'too short'
      }));
      return
    }

    let hash = bcrypt.hashSync(password, 14);


    models.UserLogin.findOrCreate({
      where: {
        email: email,
        username: username,
      },
      defaults: {
        email: email,
        password: hash,
        account_type: type,
        username: username,
      }
    }).then(function(result) {
      const { _options: options } = result[0];
      const created = result[1];
  
      if (!created) { 
        const { isNewRecord } = options;
        
        if (!isNewRecord) {
          res.end(JSON.stringify({userCreation: false, message: 'exists'}));
        } 
  
        res.end(JSON.stringify({userCreation: false, message: 'error'}));
      }
      
      if(result && result[0] && result[0].dataValues){
        models.User.update(
          {account_id: result[0].dataValues.id},
          {where: {email: result[0].dataValues.email}}
        )
        .then(function(result) {
        })
      }
      res.end(JSON.stringify({userCreation: result}));
    })
  },
  deleteAccount: function(req, res) {
    let token = req.body['authorization'] || req.headers['authorization'];

    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    let accountId;
    let reqId;

    if (req.params.id){
      reqId = Number(req.params.id);
    }

    jwt.verify(token, process.env.PUBLIC_KEY, (err, decoded) => {
      if (decoded && decoded.data){
        accountId = decoded.data.accountId;
      }
    })

    if (Number(req.params.id) !== Number(accountId)) {
      models.UserLogin.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(account) {
        res.json(account);
      });
    } else {
      return res.json({
        success: false,
        message: 'User not deleted'
      });
    }
  }
}

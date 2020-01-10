const models = require('../../models/index');
const bcrypt = require('bcrypt');

module.exports = {
  getAccounts: function(req, res) {
    models.UserLogin.findAll({}).then(function(accounts) { res.json(accounts)
    });
  },
  createAccount: function(req, res) {
    const {
      email,
      password,
      type,
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
      },
      defaults: {
        email: email,
        password: hash,
        type: type,
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
      res.end(JSON.stringify({userCreation: true}));
    })
  }
}

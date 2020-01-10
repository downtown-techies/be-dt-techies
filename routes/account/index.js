const models = require('../../models/index');

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
  
    models.UserLogin.findOrCreate({
      where: {
        email: email,
      },
      defaults: {
        email: email,
        password: password,
        type: type,
        username: username,
      }
    }).then(function(result) {
      const { _options: options } = result[0];
      const created = result[1];
  
      if (!created) { // false if author already exists and was not created.
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

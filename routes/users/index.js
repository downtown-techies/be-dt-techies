const models = require('../../models/index');
const jwt = require('jsonwebtoken');

module.exports = {
  getUsers: function(req, res) {
    models.Users.findAll({}).then(function(users) {
     res.json(users)
    });
  },
  createUser: function(req, res) {
    const {
      first_name,
      last_name,
      email,
      address_line_1,
      address_line_2,
      address_line_3,
      address_line_4,
      city,
      state,
      state_abbr,
      postal_code,
      country,
      preferred_contact,
      ph_number,
      website,
      opt_in,
      active,
      type
    } = req.body;
  
    const name = `${first_name} ${last_name}`;
  
    models.Users.findOrCreate({
      where: {
        email: email,
      },
      defaults: {
        name: name,
        first_name: first_name,
        last_name: last_name,
        email: email,
        address_line_1: address_line_1,
        address_line_2: address_line_2,
        address_line_3: address_line_3,
        address_line_4: address_line_4,
        city: city,
        state: state,
        state_abbr: state_abbr,
        postal_code: postal_code,
        country: country,
        preferred_contact: preferred_contact,
        ph_number: ph_number,
        website: website,
        opt_in: opt_in,
        active: active,
        type: type,
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
  },

  deleteUser: function(req, res) {
    let token = req.body['authorization'] || req.headers['authorization'];
    let accountId;
    let reqId;

    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    if (req.params.id){
      reqId = Number(req.params.id);
    }

    jwt.verify(token, process.env.PUBLIC_KEY, (err, decoded) => {
      if (decoded && decoded.data){
        accountId = decoded.data.accountId;
      }
    })
    models.Users.findOne({
      where: {
        id: reqId 
      }
    }).then(function(user){
      if(user && user.dataValues && Number(user.dataValues.account_id) !== Number(accountId)) {
        models.Users.destroy({
          where: {
            id: reqId
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
    })
  },
  getUserById: function(req, res) {
    console.log('req: ', req);
    let accountId;
    if(req && req.params){
      accountId = req.params.account_id;
    }

    models.Users.findOne({
        where: {
           account_id: accountId 
        }
     }).then(function(user) {
       if (!user) {
         const message = {message: 'Cannot find User'};
         res.status(404).json({message});
       } else {
         res.end(res.json(user));
       }
     });
  },
  updateUser: function(req, res) {
    let token = req.body['authorization'] || req.headers['authorization'];

    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    if (req.params.id){
      reqId = Number(req.params.id);
    }

    // jwt.verify(token, process.env.PUBLIC_KEY, (err, decoded) => {
    //   if (decoded && decoded.data){
    //     accountId = decoded.data.accountId;
    //   }
    // })

    // models.Users.update({
    //   foo: updatedattr,
    // }, {
    //   where: {id: 1},
    //   returning: true,
    //   plain: true
    // }).then(function(user){
    //   console.log('updated: ', true)
    // })
  },
}

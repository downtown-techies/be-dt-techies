const models = require('../../models/index');

module.exports = {
  getUsers: function(req, res) {
    models.User.findAll({}).then(function(users) {
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
  
    models.User.findOrCreate({
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
    models.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(user) {
      console.log(user);
      res.json(user);
    });
  }
}

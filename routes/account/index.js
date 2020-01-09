const models = require('../../models/index');

module.exports = {
  createAccount: function(req, res) {
    console.log('hit');
    console.log(req.body);
    const {
      email,
      password,
      type,
      username,
    } = req.body;
    console.log('username: ', username);
    console.log('email: ', email);
    console.log('type: ', type);
    console.log('password: ', password);
  
    // const name = `${first_name} ${last_name}`;
  
    // models.User.findOrCreate({
    //   where: {
    //     email: email,
    //   },
    //   defaults: {
    //     name: name,
    //     first_name: first_name,
    //     last_name: last_name,
    //     email: email,
    //     address_line_1: address_line_1,
    //     address_line_2: address_line_2,
    //     address_line_3: address_line_3,
    //     address_line_4: address_line_4,
    //     city: city,
    //     state: state,
    //     state_abbr: state_abbr,
    //     postal_code: postal_code,
    //     country: country,
    //     preferred_contact: preferred_contact,
    //     ph_number: ph_number,
    //     website: website,
    //     opt_in: opt_in,
    //     active: active,
    //     type: type,
    //   }
    // }).then(function(result) {
    //   const { _options: options } = result[0];
    //   const created = result[1];
  
    //   if (!created) { // false if author already exists and was not created.
    //     const { isNewRecord } = options;
    //     if (!isNewRecord) {
    //       res.end(JSON.stringify({userCreation: false, message: 'exists'}));
    //     } 
  
    //     res.end(JSON.stringify({userCreation: false, message: 'error'}));
    //   }
  
    //   res.end(JSON.stringify({userCreation: true}));
    // })
  }
}

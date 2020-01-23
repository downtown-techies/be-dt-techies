const models = require('../../models/index');
const jwt = require('jsonwebtoken');

const stateList = [ { value: 'AL', label: 'Alabama' }, { value: 'AK', label: 'Alaska' }, { value: 'AS', label: 'American Samoa' }, { value: 'AZ', label: 'Arizona' }, { value: 'AR', label: 'Arkansas' }, { value: 'CA', label: 'California' }, { value: 'CO', label: 'Colorado' }, { value: 'CT', label: 'Connecticut' }, { value: 'DE', label: 'Delaware' }, { value: 'DC', label: 'District Of Columbia' }, { value: 'FM', label: 'Federated States Of Micronesia' }, { value: 'FL', label: 'Florida' }, { value: 'GA', label: 'Georgia' }, { value: 'GU', label: 'Guam' }, { value: 'HI', label: 'Hawaii' }, { value: 'ID', label: 'Idaho' }, { value: 'IL', label: 'Illinois' }, { value: 'IN', label: 'Indiana' }, { value: 'IA', label: 'Iowa' }, { value: 'KS', label: 'Kansas' }, { value: 'KY', label: 'Kentucky' }, { value: 'LA', label: 'Louisiana' }, { value: 'ME', label: 'Maine' }, { value: 'MH', label: 'Marshall Islands' }, { value: 'MD', label: 'Maryland' }, { value: 'MA', label: 'Massachusetts' }, { value: 'MI', label: 'Michigan' }, { value: 'MN', label: 'Minnesota' }, { value: 'MS', label: 'Mississippi' }, { value: 'MO', label: 'Missouri' }, { value: 'MT', label: 'Montana' }, { value: 'NE', label: 'Nebraska' }, { value: 'NV', label: 'Nevada' }, { value: 'NH', label: 'New Hampshire' }, { value: 'NJ', label: 'New Jersey' }, { value: 'NM', label: 'New Mexico' }, { value: 'NY', label: 'New York' }, { value: 'NC', label: 'North Carolina' }, { value: 'ND', label: 'North Dakota' }, { value: 'MP', label: 'Northern Mariana Islands' }, { value: 'OH', label: 'Ohio' }, { value: 'OK', label: 'Oklahoma' }, { value: 'OR', label: 'Oregon' }, { value: 'PW', label: 'Palau' }, { value: 'PA', label: 'Pennsylvania' }, { value: 'PR', label: 'Puerto Rico' }, { value: 'RI', label: 'Rhode Island' }, { value: 'SC', label: 'South Carolina' }, { value: 'SD', label: 'South Dakota' }, { value: 'TN', label: 'Tennessee' }, { value: 'TX', label: 'Texas' }, { value: 'UT', label: 'Utah' }, { value: 'VT', label: 'Vermont' }, { value: 'VI', label: 'Virgin Islands' }, { value: 'VA', label: 'Virginia' }, { value: 'WA', label: 'Washington' }, { value: 'WV', label: 'West Virginia' }, { value: 'WI', label: 'Wisconsin' }, { value: 'WY', label: 'Wyoming' } ];

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
    let id;
    if(req && req.params){
      id = req.params.id;
    }

    models.Users.findOne({
        where: {
           id: id 
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
    const {
      account_id,
      first_name,
      last_name,
      email,
      address_line_1,
      city,
      postal_code,
      ph_number,
      website,
      intro,
    } = req.body;

    let {state} = req.body;
    let state_abbr;
    for (let entry of Object.values(stateList)) {
      if(state && state[0] == entry.value){
        state = entry.label; 
        state_abbr = entry.value;
      }
    }

    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    let reqId;
    if (req.params.id){
      reqId = Number(req.params.id);
    }

    let decodedId;
    jwt.verify(token, process.env.PUBLIC_KEY, (err, decoded) => {
      if (decoded && decoded.data){
        decodedId = decoded.data.id;
      }
    })

    if(decodedId === reqId){
      models.Users.update({
        account_id: account_id,
        state_abbr: state_abbr,
        first_name: first_name,
        last_name: last_name,
        email: email,
        address_line_1: address_line_1,
        city: city,
        state: state,
        postal_code: postal_code,
        ph_number: ph_number,
        website: website,
        intro: intro,
      }, {
        where: {id: decodedId},
        returning: true,
        plain: true
      }).then(function(user){
        res.end(JSON.stringify({user: user, message: 'updated'}));
      })
    }
  },
}

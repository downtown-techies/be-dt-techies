'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    address_line_1: DataTypes.STRING,
    address_line_2: DataTypes.STRING,
    address_line_3: DataTypes.STRING,
    address_line_4: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    state_abbr: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    country: DataTypes.STRING,
    preferred_contact: DataTypes.STRING,
    ph_number: DataTypes.STRING,
    website: DataTypes.STRING,
    opt_in: DataTypes.BOOLEAN,
    follow_up: DataTypes.BOOLEAN,
    skills: DataTypes.ARRAY(DataTypes.STRING),
    gig_category: DataTypes.ARRAY(DataTypes.STRING),
    gig_needs: DataTypes.ARRAY(DataTypes.STRING),
    intro_description: DataTypes.STRING,
    location: DataTypes.ARRAY(DataTypes.DECIMAL)
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return User;
};

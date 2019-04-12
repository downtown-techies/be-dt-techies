'use strict';
module.exports = function(sequelize, DataTypes) {
  var MeetupGroup = sequelize.define('MeetupGroup', {
    name: DataTypes.STRING,
    address_line_1: DataTypes.STRING,
    address_line_2: DataTypes.STRING,
    address_line_3: DataTypes.STRING,
    address_line_4: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    state_abbr: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    country: DataTypes.STRING,
    organizer: DataTypes.STRING,
    organizer_id: DataTypes.INTEGER,
    url: DataTypes.STRING,
    sponsors: DataTypes.ARRAY(DataTypes.STRING),
    contact_email: DataTypes.STRING,
    contact_ph: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MeetupGroup;
};

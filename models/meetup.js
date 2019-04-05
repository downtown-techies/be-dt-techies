'use strict';
module.exports = function(sequelize, DataTypes) {
  var Meetup = sequelize.define('Meetup', {
    name: DataTypes.STRING,
    address_line_1: DataTypes.STRING,
    adress_line_2: DataTypes.STRING,
    address_line_3: DataTypes.STRING,
    address_line_4: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    country: DataTypes.STRING,
    organizer: DataTypes.INTEGER,
    organizer: DataTypes.INTEGER,
    sponsor: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Meetup;
};

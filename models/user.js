'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    location: DataTypes.ARRAY(DataTypes.DECIMAL),
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return User;
};

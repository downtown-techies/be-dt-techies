'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLogin = sequelize.define('UserLogin', {
    account_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  UserLogin.associate = function(models) {
    UserLogin.belongsTo(models.User);
  };
  return UserLogin;
};

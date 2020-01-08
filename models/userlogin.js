'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLogin = sequelize.define('UserLogin', {
    account_id: DataTypes.INTEGER,
    account_type: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
  }, {});
  // UserLogin.associate = function(models) {
  //   UserLogin.belongsTo(models.User);
  // };
  return UserLogin;
};

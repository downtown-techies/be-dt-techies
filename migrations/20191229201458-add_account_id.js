'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'account_id',
         Sequelize.INTEGER
      ),
      queryInterface.addColumn(
        'UserLogins',
        'account_id',
         Sequelize.INTEGER
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'Users',
        'account_id',
         Sequelize.INTEGER
      ),
      queryInterface.removeColumn(
        'UserLogins',
        'account_id',
         Sequelize.INTEGER
      )
    ]);
  }
};


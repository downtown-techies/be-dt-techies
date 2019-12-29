'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return Promise.all([
      queryInterface.addColumn(
        'UserLogins',
        'account_type',
         Sequelize.STRING
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
     return Promise.all([
      queryInterface.removeColumn(
        'UserLogins',
        'account_type'
      )
    ]);
  }
};

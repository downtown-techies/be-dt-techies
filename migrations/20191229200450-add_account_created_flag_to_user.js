'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'account_created',
         Sequelize.BOOLEAN,
       )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'Users',
        'account_created',
         Sequelize.BOOLEAN,
       )
    ]);
  }
};

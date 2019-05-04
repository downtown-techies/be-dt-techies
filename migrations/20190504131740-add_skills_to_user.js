'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'skills',
         Sequelize.ARRAY(Sequelize.STRING),
       )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'Users',
        'skills'
       )
    ]);
  }
};

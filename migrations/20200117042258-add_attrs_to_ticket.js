'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.addColumn(
        'Tickets',
        'complete',
         Sequelize.BOOLEAN
      ),
      queryInterface.addColumn(
        'Tickets',
        'contact_category',
         Sequelize.STRING
      )
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'Tickets',
        'complete'
      ),
      queryInterface.removeColumn(
        'Tickets',
        'category_category'
      )
    ]);
  }
};

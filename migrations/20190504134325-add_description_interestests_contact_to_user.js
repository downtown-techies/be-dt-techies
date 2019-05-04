'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'gig_category',
         Sequelize.ARRAY(Sequelize.STRING),
       ),
       queryInterface.addColumn(
        'Users',
        'gig_needs',
         Sequelize.ARRAY(Sequelize.STRING),
       ),
       queryInterface.addColumn(
         'Users',
         'intro_description',
         Sequelize.STRING,
       ),
       queryInterface.addColumn(
         'Users',
         'follow_up',
         Sequelize.BOOLEAN
       )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'Users',
        'gig_category'
       ),
       queryInterface.removeColumn(
        'Users',
        'gig_needs'
       ),
       queryInterface.removeColumn(
         'Users',
         'intro_description'
       ),
       queryInterface.removeColumn(
         'Users',
         'follow_up'
       )
    ]);
  }
};


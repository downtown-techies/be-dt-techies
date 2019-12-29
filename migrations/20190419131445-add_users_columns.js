'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'address_line_1',
         Sequelize.STRING
       ),
      queryInterface.addColumn(
        'Users',
        'address_line_2',
         Sequelize.STRING
       ),
      queryInterface.addColumn(
        'Users',
        'address_line_3',
         Sequelize.STRING
       ),
      queryInterface.addColumn(
        'Users',
        'address_line_4',
         Sequelize.STRING
       ),
      queryInterface.addColumn(
        'Users',
        'city',
         Sequelize.STRING
       ),
      queryInterface.addColumn(
        'Users',
        'state',
         Sequelize.STRING
       ),
      queryInterface.addColumn(
        'Users',
        'state_abbr',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'postal_code',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'country',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'preferred_contact',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'ph_number',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'website',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'opt_in',
        Sequelize.BOOLEAN
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
            queryInterface.removeColumn(
        'Users',
        'address_line_1'
       ),
      queryInterface.removeColumn(
        'Users',
        'address_line_2'
       ),
      queryInterface.removeColumn(
        'Users',
        'address_line_3'
       ),
      queryInterface.removeColumn(
        'Users',
        'address_line_4'
       ),
      queryInterface.removeColumn(
        'Users',
        'city'
       ),
      queryInterface.removeColumn(
        'Users',
        'state'
       ),
      queryInterface.removeColumn(
        'Users',
        'state_abbr'
      ),
      queryInterface.removeColumn(
        'Users',
        'postal_code'
      ),
      queryInterface.removeColumn(
        'Users',
        'country'
      ),
      queryInterface.removeColumn(
        'Users',
        'preferred_contact'
      ),
      queryInterface.removeColumn(
        'Users',
        'ph_number'
      ),
      queryInterface.removeColumn(
        'Users',
        'website'
      ),
      queryInterface.removeColumn(
        'Users',
        'opt_in'
      )
    ]);
  }
};
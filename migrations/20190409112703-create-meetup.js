'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Meetups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address_line_1: {
        type: Sequelize.STRING
      },
      adress_line_2: {
        type: Sequelize.STRING
      },
      address_line_3: {
        type: Sequelize.STRING
      },
      address_line_4: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      organizer: {
        type: Sequelize.INTEGER
      },
      sponsor: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Meetups');
  }
};

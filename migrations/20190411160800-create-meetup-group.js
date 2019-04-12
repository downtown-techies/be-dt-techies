'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('MeetupGroups', {
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
        type: Sequelize.STRING,
        allowNull: true

      },
      address_line_2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      address_line_3: {
        type: Sequelize.STRING,
        allowNull: true
      },
      address_line_4: {
        type: Sequelize.STRING,
        allowNull: true
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true
      },
      state_abbr: {
        type: Sequelize.STRING,
        allowNull: true
      },
      postal_code: {
        type: Sequelize.STRING,
        allowNull: true
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true
      },
      organizer: {
        type: Sequelize.STRING
      },
      organizer_id: {
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sponsors: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      contact_email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      contact_ph: {
        type: Sequelize.STRING,
        allowNull: true
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
    return queryInterface.dropTable('MeetupGroups');
  }
};

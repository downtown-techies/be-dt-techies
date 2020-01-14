'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      point_of_contact: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      submitter_name: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      contact_email: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      submitter_email: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      contact_email: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      gig_category: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      technical_requirements: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true 
      },
      project_length: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      project_description: {
        type: Sequelize.TEXT,
        allowNull: false 
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
    return queryInterface.dropTable('Tickets');
  }
};

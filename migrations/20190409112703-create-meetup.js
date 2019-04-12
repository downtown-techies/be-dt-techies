'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Meetups', {
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Meetups');
  }
};

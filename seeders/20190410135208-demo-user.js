'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        first_name: 'John',
        last_name: 'Doe',
        email: 'email@foo.com',
        active: true,
        type: 'member',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

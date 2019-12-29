'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserLogins', [{
      username: 'blake',
      email: 'b@b.com',
      account_id: 1,
      account_type: 'admin',
      password: 'foobar',
      password: 'foobar',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserLogins', null, {});
  }
};

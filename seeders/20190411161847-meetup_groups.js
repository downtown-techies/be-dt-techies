'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('MeetupGroups', [
        {
          name: 'Durham',
          address_line_1: '110 Corcoran St',
          city: 'Durham',
          state: 'North Carolina',
          state_abbr: 'NC',
          postal_code: '27701',
          country: 'USA',
          organizer: 'Jake Shepherd',
          organizer_id: 5,
          url: 'https://www.meetup.com/Downtown-Techies-Durham-Edition-by-popular-demand/',
          sponsors: ['WeWork', 'Indie Developer'],
          contact_email: 'jake@downtowntechies.com',
          contact_ph: '',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Raleigh',
          address_line_1: '110 Corcoran St',
          city: 'Durham',
          state: 'North Carolina',
          state_abbr: 'NC',
          postal_code: '27701',
          country: 'USA',
          organizer: 'Blake Burnette',
          organizer_id: 5,
          url: 'https://www.meetup.com/Downtown-Techies-Durham-Edition-by-popular-demand/',
          sponsors: ['WeWork', 'Indie Developer'],
          contact_email: 'jake@downtowntechies.com',
          contact_ph: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('MeetupGroups', null, {});
  }
};

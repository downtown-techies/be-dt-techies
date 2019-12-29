'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        first_name: 'John',
        last_name: 'Doe',
        email: 'email@foo.com',
        address_line_1: '115 S Briggs Ave',
        address_line_2: '',
        address_line_3: '',
        address_line_4: '',
        city: 'Durham',
        state: 'North Carolina',
        state_abbr: 'NC',
        postal_code: '27703',
        country: 'USA',
        account_created: true,
        preferred_contact: 'email',
        ph_number: '9198675309',
        website: 'www.google.com',
        opt_in: true, 
        follow_up: true, 
        active: true,
        type: 'member',
        skills: ['FrontEnd', 'BackEnd', 'DevOps'],
        gig_category: ['Investor', 'Founder', 'Developer', 'Networker', 'Seeker'],
        gig_needs: ['freelance_talent', 'investors', 'mentor', 'recruiter', 'event_sponsor'],
        intro_description: 'New to the area, looking for all the things',
        skills: ['FrontEnd', 'BackEnd', 'DevOps'],
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

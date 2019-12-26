const models = require('../../models/index');

module.exports = {
  getMeetups: function(req, res) {
    models.MeetupGroup.findAll({}).then(function(meetupgroups) {
      res.json(meetupgroups);
    });
  },
  createMeetup: function(req, res) {
    models.MeetupGroup.create({
      name: req.body.name,
      address_line_1: req.body.address_line_1,
      address_line_2: req.body.address_line_2,
      address_line_3: req.body.address_line_3,
      address_line_4: req.body.address_line_4,
      city: req.body.city,
      state: req.body.state,
      state_abbr: req.body.state_abbr,
      postal_code: req.body.postal_code,
      country: req.body.country,
      organizer: req.body.organizer,
      organizer_id: req.body.organizer_id,
      url: req.body.url,
      sponsors: req.body.sponsors,
      contact_email: req.body.contact_email,
      contact_ph: req.body.contact_ph
    }).then(function(meetupGroup) {
      res.json(meetupGroup);
    });
  }
}

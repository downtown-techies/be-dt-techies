const models = require('../../models/index');
const jwt = require('jsonwebtoken');

module.exports = {
  getTickets: function(req, res) {
    models.Tickets.findAll({}).then(function(tickets) {
     res.json(tickets)
    });
  },
  createTicket: function(req, res) {
    const {
      submitter_name,
      point_of_contact,
      contact_email,
      submitter_email,
      gig_category,
      technical_requirements,
      project_length,
      category_category,
      complete=false,
      project_description,
    } = req.body;
  
    console.log(req.body);
    console.log(point_of_contact);

    models.Tickets.create({
        point_of_contact: point_of_contact,
        submitter_name: submitter_name,
        contact_email: contact_email,
        submitter_email: submitter_email,
        gig_category: gig_category,
        technical_requirements: technical_requirements,
        project_length: project_length,
        category_category: category_category,
        complete: complete,
        project_description: project_description,
    }).then(function(result) {
      res.end(JSON.stringify({ticketCreation: true, ticket: result.dataValues}));
    }).catch(function(){
      res.end(JSON.stringify({ticketCreation: false}));
    })
  },
  deleteTicket: function(req, res) {
    let token = req.body['authorization'] || req.headers['authorization'];
    let accountId = 24;
    let reqId;

    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    if (req.params.id){
      reqId = Number(req.params.id);
    }

    jwt.verify(token, process.env.PUBLIC_KEY, (err, decoded) => {
      if (decoded && decoded.data){
        accountId = decoded.data.accountId;
      }
    })


    models.Ticket.findOne({
      where: {
        id: reqId 
      }
    }).then(function(ticket){
      if(ticket && ticket.dataValues && Number(ticket.dataValues.account_id) !== Number(accountId)) {
        models.Ticket.destroy({
          where: {
            id: reqId
          }
        }).then(function(account) {
          res.json(account);
        });
      } else {
        return res.json({
          success: false,
          message: 'Ticket not deleted'
        });
      }
    })
  },
}

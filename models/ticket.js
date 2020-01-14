'use strict';
module.exports = function(sequelize, DataTypes) {
  const Tickets = sequelize.define('Tickets', {
    submitter_name: DataTypes.STRING,
    point_of_contact: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    submitter_email: DataTypes.STRING,
    gig_category: DataTypes.ARRAY(DataTypes.STRING),
    technical_requirements: DataTypes.ARRAY(DataTypes.STRING),
    project_length: DataTypes.ARRAY(DataTypes.STRING),
    project_description: DataTypes.TEXT,
  }, {});
  return Tickets;
};

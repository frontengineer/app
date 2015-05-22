'use strict';

var _ = require('lodash');
var dpmailer = require('../../components/mailer');
var inviteStore = require('../../stores/DomainStore');
var token;



// Get list of sends
exports.index = function(req, res) {
  var dataSet = {
    host    : req.get('host'),
    email   : req.param('email'),
    company : req.param('company')
  };
  console.log('api send requested');
  token = require('crypto').randomBytes(48).toString('base64');
  console.log('invite token', token, inviteStore.addDomain());

  res.json({ msg : 'received'});

  /**
   * TODO
   * send email with "team-creation-path" if does not exist
   */
  //dpmailer.sendAccountVerifyLink(dataSet);
  //res.json(dpmailer.sendAccountVerifyLink(dataSet) );
};

'use strict';

var _ = require('lodash');
var dpmailer = require('../../components/mailer');
var inviteStore = require('../../stores/InviteStore');
token = require('crypto').randomBytes(48).toString('base64');
console.log('invite token', token, inviteStore.addInvite());


// Get list of sends
exports.index = function(req, res) {
  var dataSet = {
    host    : req.get('host'),
    email   : req.param('email'),
    company : req.param('company')
  };
  console.log('api send requested');

  res.json({ msg : 'received'});
  //dpmailer.sendAccountVerifyLink(dataSet);
  //res.json(dpmailer.sendAccountVerifyLink(dataSet) );
};

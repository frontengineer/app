'use strict';

var _ = require('lodash');
var dpmailer = require('../../components/mailer');

// Get list of sends
exports.index = function(req, res) {
  console.log('api send requested');
  var dataSet = {
    host    : req.get('host'),
    to      : req.param('to'),
    company : req.param('company')
  };
  //dpmailer.sendAccountVerifyLink(dataSet);
  res.json(dpmailer.sendAccountVerifyLink(dataSet) );
};

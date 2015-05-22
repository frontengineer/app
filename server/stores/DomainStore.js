/**
 * Created by davidparnell on 5/19/15.
 */
'use strict';
var Firebase = require('firebase');
var csv = require("fast-csv");
var request = require('request');
var FirebaseTokenGenerator = require("firebase-token-generator");
var localConfig = require('../config/local.env');

var inviteStore = new Firebase(localConfig.FIREBASE_URL);
module.exports = {
  addInvite : function(){
    return 'blahvite';
  }
};

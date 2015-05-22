/**
 * Created by davidparnell on 5/19/15.
 */
'use strict';
var Firebase = require('firebase');
var csv = require("fast-csv");
var request = require('request');
var FirebaseTokenGenerator = require("firebase-token-generator");
var localConfig = require('../config/local.env');


module.exports = {
  addDomain : function(domainReq){
    var userId = 4;
    var domainStore = new Firebase(localConfig.FIREBASE_URL);
    console.log('fburl', localConfig.FIREBASE_URL);
    domainStore.child('domains').push({simbas : {teamName: 'blah', url: 'blahcom'} });
    //domainStore.child(userId).once('value', function(snapshot) {
    //  var exists = (snapshot.val() !== null);
    //  console.log('snapshot', snapshot);
    //  //if (exists) {
    //  //  console.log('user ' + userId + ' exists!');
    //  //} else {
    //  //  console.log('user ' + userId + ' does not exist!');
    //  //}
    //});
    return 'blahvite';
  }
};

/**
 * Main Firebase Job Queue
 */

'use strict';


var localConfig = require('./config/local.env');
/** DP REQUIRED **/

var Queue = require('firebase-queue');
var Firebase = require('firebase');
var jwt = require('jsonwebtoken');

var myRootRef = new Firebase(localConfig.FIREBASE_URL);
var taskRef = myRootRef.child('sparta/queue');
var options = {
  'specId': 'spec_1'
};
var token;
var checkPending = new Queue(taskRef, options, function(data, progress, resolve, reject){
  console.log('queue data: ', data);
  token = jwt.sign(data, localConfig.domainSecret);
  console.log('new token', token);

  //setTimeout(function() {
  //progress(50);
  //}, 500);


  //setTimeout(function() {
  //resolve({ msg : 'moved data', data: data });
  data.token = token.replace(/\./g, '');
  resolve(data);
  //}, 3000);
});


var options = {
  'specId': 'spec_2',
  'numWorkers': 5
};
var fanoutQueue = new Queue(taskRef, options, function(data, progress, resolve, reject) {
  // fan data out to /messages, ensure that Firebase errors are caught and cause the task to fail
  console.log('spec 2 data', data);
  myRootRef.child('sparta').child(data.token).set(true, function(error){
    if (error) {
      reject(error.message);
    } else {
      resolve(data);
    }
  });
});


//- start_state: "sanitize_message_finished"
//- in_progress_state: "fanout_message_in_progress"
//- error_state: "fanout_message_failed"
//- retries: 3


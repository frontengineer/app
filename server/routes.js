/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var formidable = require('formidable');
var util = require('util');
var querystring = require('querystring');
var fs = require('fs');
var localConfig = require('./config/local.env');
/** DP REQUIRED **/

var Queue = require('firebase-queue');
var Firebase = require('firebase');
var csv = require("fast-csv");
var request = require('request');
//var FirebaseTokenGenerator = require("firebase-token-generator");

//console.log('firebase', process.FIREBASE_URL);
var myRootRef = new Firebase(localConfig.FIREBASE_URL);

/** DP VARS **/
var domainChecker = function(req, res, next){
  console.log('host', req.host);
  next();
};


module.exports = function(app) {

  //app.use(function(req, res, next) {
  //  res.setHeader('Access-Control-Allow-Origin', '*');
  //  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  //  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  //  next();
  //});
  // Insert routes below
  app.use('/api/authenticate', require('./api/authenticate'));
  app.use('/api/startDomain', require('./api/start_domain'));
  app.use('/api/verify', require('./api/verify'));
  app.use('/api/messages', require('./api/message'));
  app.use('/api/things', require('./api/thing'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .all(domainChecker)
    .get(function(req, res) {
      console.log('the domain', req.host);
      res.sendfile(app.get('appPath') + '/index.html');
    });

  app.route('/uploads')
    .post(function(req, res) {
      //console.log(req);
      res.send({ blah: 987 });
      return;






      // parse a file upload
      var form = new formidable.IncomingForm();
      var formJson = [];
      var firebase = new Firebase('https://glaring-inferno-1396.firebaseio.com');
      //firebase.authWithCustomToken(AUTH_TOKEN, function(error, authData) {
      //  if (error) {
      //    console.log("Login Failed!", error);
      //  } else {
      //    console.log("Login Succeeded!", authData);
      //  }
      //});
      form.parse(req, function(err, fields, files) {
        console.log('the files.................');
        console.log(files);
        //stream = fs.createReadStream(files.file.path);
        csv
          .fromPath(files.file.path)
          .on("data", function(data){
            console.log('the csv data');
            formJson.push(data);
          })
          .on("end", function(){
            console.log("done");
            console.log(formJson);
            request.post(
              'https://glaring-inferno-1396.firebaseio.com/nodecurl.json?auth='+AUTH_TOKEN,
              { json: formJson }, function optionalCallback(err, httpResponse, body) {
                if (err) {
                  return console.error('upload failed:', err);
                }
                console.log('Upload successful!  Server responded with:', body);
              });//.auth(null, null, false, token);
            //firebase.push(formJson);
            //setTimeout(function(){
            //  firebase.remove();
            //}, 3000);
          });


        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        res.end(util.inspect({fields: fields, files: files}));
      });

      return;
    });
};

/**
 * Error responses
 */

'use strict';


var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var localConfig = require('../../config/local.env');

var token = require('crypto').randomBytes(48).toString('base64');

var transporter = nodemailer.createTransport({
  service : localConfig.email.provider,
  auth: {
    user  : localConfig.email.user,
    pass  : localConfig.email.pass
  }
});
var rand, mailOptions, host, link;
console.log('invite token', token);

module.exports = {
  sendAccountVerifyLink : function(userData){
    console.log('dataSet', userData);
    rand = Math.floor((Math.random() * 100) + 54);
    link = 'http://' + userData.host+ '/verify?id=' + rand;
    mailOptions= {
      to : userData.to,
      subject : "Please confirm your Email account",
      html : "Hello,<br> Please Click on the link to verify your email for " + userData.company + ".<br><a href="+link+">Click here to verify</a>"
    };

    /**
     * TODO
     * Replace this token code with something more secure/user-specific...maybe with secret within encoding
     */
    return { priority : new Date().getTime(), invite: token };

    console.log('current mailoptions: ', mailOptions);
    /**
     *
     * TODO
     * Enable the below with real service/account
     */

    //return transporter.sendMail(mailOptions, function(err, response){
    //  if(err){
    //    console.log('no bueno', err);
    //    return 'error homie!';
    //  } else {
    //    console.log('message sent' + response.message);
    //    return 'success homie!';
    //  }
    //})
  }
};

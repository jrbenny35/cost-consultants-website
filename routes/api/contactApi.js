'use strict';

var express = require('express');
var router = express.Router();
var app = express();
var nodemailer = require('nodemailer');

var models = require('../../models/index');


router.post('/contact', function(req, res){

    var contact;
    console.log("POST: ");
    console.log(req.body);

    contact = new models.contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        companyName: req.body.companyName,
        number: req.body.number,
        date: req.body.date,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    });

    contact.save(function (err) {
        if (!err) {
            return console.log("Created");
        } else {
            return console.log(err);
        }
    });
/*
    //Nodemailer email
    console.log('Nodemailer post ' + req.body);

    //Create Transport Service
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'jrbenny169@gmail.com',
            pass: 'Rustler@135'
        }
    });

    //Define mail parameters
    var mailOptions = {
        from: 'Node app bennyjr169@gmail.com', // sender address
        to: 'bennyjr169@gmail.com', // list of receivers
        subject: req.body.name + ' Sent you an email!', // Subject line
        text: req.body.email + ' Sent you an email. They wrote: ' + req.body.message // plaintext body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        transporter.close();

    });
*/

    return res.send(contact);

});


module.exports = router;

'use strict';

/**
 * Created by root on 10/2/15.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var contactSchema = new Schema({

    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    message:{
        type: String,
        require: true
    },
    companyName:{
        type: String,
        require: true
    },
    number:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        require: true
    },
    zip:{
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    },
    state:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Contact', contactSchema);

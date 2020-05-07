var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('SSN', new Schema({
    email: {
        type: String,

    },
    name: {
        type: String
    },
    motherMaidenName: {
        type: String
    },
    fathersName: {
        type: String
    },
    address: {
        type: String
    },
    maritalStatus: {
        type: String
    },
    dob: {
        type: String
    },
    photo: {},
    ssn: {
        type: Number
    },
    mobileNumber: {
        type: Number
    },
    gender: {
        type: String
    },
    customer: {
        taxationId: {
            type: Number
        },
        occupation: {
            type: String,
        },
        annualIncome: { type: Number },
        nameOnCard: { type: String }
    },
    nomineeDetails: {
        hasNominee: { type: Boolean },
        relation: { type: String },
        nomineeName: { type: String },
        dobNominee: { type: String },
        address: { type: String }
    },
    accountDetails: {
        accountNumber: { type: String },
        routingNumber: { type: String },
        cardNumber: {
            type: String,
            
        },
       
        wireTransId:{type: String}



    },
    balance: { type: Number },


}));
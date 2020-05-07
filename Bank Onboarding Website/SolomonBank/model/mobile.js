var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Mobile = new Schema({
    MobileNo: {
        type: Number
    },
});

module.exports = mongoose.model('mobile', Mobile);
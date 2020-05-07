var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Actor = new Schema({
    name: {
        type: String
    },
    bio: {
        type: String
    },
    dob: {
        type: Date
    },
    photo: {}
});

module.exports = mongoose.model('actor', Actor);
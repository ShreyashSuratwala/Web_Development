var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Movie = new Schema({
    title: {
        type: String
    },
    release_date: {
        type: Date
    },
    poster: {},
    director: {
        type: String
    },
    runtime: {
        type: String
    },
    plot: {
        type: String
    },
    
    actors: [Schema.Types.ObjectId]
    
           
    
    /* writers: [],
     genre: []*/
});

module.exports = mongoose.model('movie', Movie);
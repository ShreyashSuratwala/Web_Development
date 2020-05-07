module.exports = function(app) {
    app.use('/api/actor', require('./actor'));
    app.use('/api/movie', require('./movie'));

}
// This is example of server.js


// Server file
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 4200;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
global.rootPath = __dirname;
global.flag = 1;
mongoose.connect('mongodb://test:test@ds052968.mlab.com:52968/mongotestmayank');

var config = require('./config')
var registrationLogin = require('./routes/registrationLogin')
var jwtVerify = require('./routes/jwtVerify')

app.use(bodyParser.json());
require('./routes/routes-config')(app);

app.use(express.static(path.join(__dirname, 'public')));

 //app.use(express.static('./public'));
// app.use(function(req, res) {
//     res.sendFile(__dirname + '/public/src/index.html');
// });


app.use('/', registrationLogin)


app.listen(PORT, function(err) {
    console.log(err || ('running at port ' + PORT));
})


//End of file

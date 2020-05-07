var app = require('express').Router();
var multer = require('multer');
var upload = multer({
    dest: 'images/actors/'
});
var Actor = require('../model/actor');
var Movie = require('../model/movie');
var Mobile = require('../model/mobile');
var express = require('express');
var registrationLogin = express.Router();
var mongoose = require('mongoose');
var user = require('../model/user')
var jwt = require('jsonwebtoken');
var superSecret = require('../config')


app.get('/all', function(req, res) {
    debugger;
    Actor.find({}, function(err, data) {
        if (err) {
            res.send({
                status: false,
                error: err
            });
        } else {
            res.send({
                status: true,
                actors: data
            });
        }
    })
})
app.post('/', upload.single('photo'), function(req, res) {
    var actor = new Actor({
        name: req.body.name,
        dob: req.body.dob,
        bio: req.body.bio,
        photo: req.file
    });
    actor.save(function(err, data) {
        if (err) {
            res.send({
                status: false,
                error: err
            });
        } else {
            res.send({
                status: true,
                data: data
            });
        }

    });
});

app.post('/mobile', function(req, res) {
    var otp = Math.floor((Math.random()*1000000)+1);

    var mobile = new Mobile({
        MobileNo: req.body.mobileNo,
    });
    Mobile.findOne({ MobileNo: req.body.mobileNo}, function(err, data) {
        if (data && data.MobileNo) {
            // res.header('content-type', data.photo && data.photo.mimetype);
            // res.sendFile(global.rootPath + '/' + data.photo.path);
            if(data.MobileNo == req.body.mobileNo) {
                var token = jwt.sign(data, superSecret.secret, {
                    expiresIn: 86400 // expires in 24 hours 
                })
                res.send({
                    status: true,
                    otp: otp,
                    token: token
                });
            }
        } else if (err) {
            res.send({
                status: false,
                error: err
            });
        } 
        
        else{
            mobile.save(function(error, d) {
                var token = jwt.sign(d, superSecret.secret, {
                    expiresIn: 86400 // expires in 24 hours 
                })
                if (error) {
                    res.send({
                        status: false,
                        error: error
                    });
                } else {
                    res.send({
                        status: true,
                        otp: 123456,
                        token: token,
                    });
                }
        
            });

        }
    })

   
});
app.delete('/:id', function(req, res) {
    Actor.remove({ _id: req.params.id }, function(err, data) {
        if (err) {
            res.send({
                status: false,
                error: err
            });
        } else {
            res.send({
                status: true,
                actors: data
            });
        }
    });
})

app.post('/edit/:id', upload.single('photo'), function(req, res) {
    
        //var _id = req.body._id;
        var actor = {
        name: req.body.name,
        dob: req.body.dob,
        bio: req.body.bio,
        photo: req.file
    };
    
    Actor.findOneAndUpdate({_id : req.params.id }, {$set: actor}, { new: true }, function(err, data) {
        if (err) {
            res.send({
                status: false,
                error: err
            });
        } else {
            res.send({
                status: true,
                data: data,
                msg: "updated"
            });
        }

    });
     
        
});
app.get('/img/:id', function(req, res) {
    Actor.findOne({ _id: req.params.id }, function(err, data) {
        if (data && data.photo) {
            res.header('content-type', data.photo && data.photo.mimetype);
            res.sendFile(global.rootPath + '/' + data.photo.path);
        } else {
            res.send(err);
        }
    });
});

app.get('/image/:id', function(req, res) {
    Movie.findOne({ _id: req.params.id }, function(err, data) {
        if (data && data.poster) {
            res.header('content-type', data.poster && data.poster.mimetype);
            res.sendFile(global.rootPath + '/' + data.poster.path);
        } else {
            res.send(err);
        }
    });
});

app.get('/actor/:id', function(req, res) {
    Movie.find({ actors: req.params.id }, function(err, data) {
        if (err) {
            res.send({
                status: false,
                error: err
            });
        } else {
            res.send({
                status: true,
                actors: data
            });
        }
    })
})
app.get('/:id', function(req, res){
    Actor.findOne({_id: req.params.id}, function(err, data){
        if(err){
            res.send({
                status: false,
                error: err
            });
        } else {
            res.send({
                status: true,
                actors: data
            });
        }
    })
});

module.exports = app;
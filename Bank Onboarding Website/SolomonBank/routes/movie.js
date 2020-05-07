var app = require('express').Router();
var bodyparser = require('body-parser')
// var multer = require('multer');
// var upload = multer({
//     dest: 'images/movies/'
// });
var express = require('express');
var Movie = require('../model/movie');
var Ssn = require('../model/ssn');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var superSecret = require('../config')
var registrationLogin = express.Router();
var mongoose = require('mongoose');
var user = require('../model/user')
// var multer = require('multer');
// var upload = multer({
//     dest: 'images/movies/'
// });

var path = require('path')
var multer = require('multer')

var storage = multer.diskStorage({
    destination: './client/src/assets/uploads/',
    filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err)
  
        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
  
  var upload = multer({ storage: storage })

app.post('/', upload.single('poster'), function (req, res) {
    var movie = new Movie({
        title: req.body.title,
        release_date: req.body.release_date,
        poster: req.file,
        director: req.body.director,
        runtime: req.body.runtime,
        plot: req.body.plot,
        actors: req.body.actors
    });
    movie.save(function (err, data) {
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

app.post('/ssn', upload.single('photo'), function (req, res) {
    var ssno = new Ssn({
        email: req.body.email,
        name: req.body.name,
        photo: req.file,
        motherMaidenName: req.body.motherMaidenName,
        fathersName: req.body.fathersName,
        address: req.body.address,
        maritalStatus: req.body.maritalStatus,
        dob: req.body.dob,
        mobileNumber: req.body.mobileNumber,
        ssn: req.body.ssn
    });
    ssno.save(function (err, data) {
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

app.post('/deactivateAccount', function (req, res) {

    Ssn.findOneAndRemove({ ssn: req.body.ssn }, function (err, data) {

        if (data) {
            res.send(data);
        } else {
            res.send(err);
        }
    })


});

app.post('/ssnValidate', verifyToken, upload.single('photo'), function (req, res) {

    Ssn.findOne({ ssn: req.body.ssn }, function (err, data) {
        var otp = Math.floor((Math.random()*1000000)+1);

        if (data && data.photo) {
            res.header('content-type', data.photo && data.photo.mimetype);
            //res.sendFile(global.rootPath + '/' + data.photo.path);
            res.send({
                data: data,
                otp:otp
            });
        } else {
            res.send(err);
        }
    })
})

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, superSecret.secret)
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    Ssn.findOne({  ssn: req.body.ssn }, function(err, data) {
        if (data && data.mobileNumber) { 
            data.mobileNumber = payload._doc.MobileNo
    next()
  }
  else{
    res.send(err);
  }
})
}

app.post('/biometricDone', function (req, res) {

    Ssn.findOne({ ssn: req.body.ssn }, function (err, data) {

        if (data) {
            var id = data.id
            Ssn.findOneAndUpdate({ _id: id },
                {
                    $set: {

                        biometricDone: req.body.biometricDone
                    }
                },
                { new: true }, function (err, d) {
                    if (err) {
                        res.send({
                            status: false,
                            error: err
                        });
                    } else {
                        res.send({
                            status: true,
                            data: d,
                            message: "Successful"
                        });
                    }

                });

        } else {
            res.send(err);
        }
    })


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


app.post('/checkExistingUser', function (req, res) {


    Ssn.findOne({ mobileNumber: req.body.mobileNo }, function (err, data) {
        var otp = Math.floor((Math.random()*1000000)+1);
        if (data) {
            var token = jwt.sign(data, superSecret.secret, {
                expiresIn: 86400 // expires in 24 hours 
            })

            res.send({
                token: token,
                data:data,
                otp: otp
            });
        } else {
            if (err) {
                res.send(err);
            }
            else {
                res.send(undefined);
            }
        }
    })
});

app.post('/userRegistrationSucc', verifyToken, function (req, res) {

    Ssn.findOne({ ssn: req.body.ssn }, function (err, data) {
        var annualIncome = req.body.annualIncome || '0'
        if (data) {
            var id = req.body._id
            var ssno = new Ssn({
                email: req.body.email,
                name: req.body.name,
                photo: req.file,
                motherMaidenName: req.body.motherMaidenName,
                fathersName: req.body.fathersName,
                address: req.body.address,
                maritalStatus: req.body.maritalStatus,
                dob: req.body.dob,
                mobileNumber: req.body.mobileNumber,
                ssn: req.body.ssn,
                customer: { nameOnCard: req.body.nameOnCard }
            });
            Ssn.findOneAndUpdate({ _id: id },
                {
                    $set: {
                        email: req.body.email, motherMaidenName: req.body.motherMaidenName, fathersName: req.body.fathersName,
                        customer: { nameOnCard: req.body.nameOnCard, taxationId: req.body.taxationId, occupation: req.body.occupation, annualIncome: annualIncome  }
                        ,
                        maritalStatus: req.body.maritalStatus,
                        nomineeDetails: { relation: req.body.Nominee_relation, nomineeName: req.body.name_Nominee, dobNominee: req.body.nominee_dob },
                        accountDetails: {
                            accountNumber: req.body.accountNumber,
                            routingNumber: req.body.routingNumber,
                            cardNumber: req.body.cardNumber,
                            wireTransId: req.body.wireTransId

                        }
                    }
                },
                { new: true }, function (err, d) {
                    if (err) {
                        res.send({
                            status: false,
                            error: err
                        });
                    } else {
                        res.send({
                            status: true,
                            data: d
                        });
                    }

                });

            // res.header('content-type', data.photo && data.photo.mimetype);
            // //res.sendFile(global.rootPath + '/' + data.photo.path);
            // res.send(data);
        } else {
            res.send(err);
        }
    })

    //   ssno.save(function(err, data) {
    //         if (err) {
    //             res.send({
    //                 status: false,
    //                 error: err
    //             });
    //         } else {
    //             res.send({
    //                 status: true,
    //                 data: data
    //             });
    //         }

    //     });
});


app.get('/all', function (req, res) {
    Movie.find({}, function (err, data) {
        if (err) {
            res.send({
                status: false,
                error: err
            });
        } else {
            res.send({
                status: true,
                movies: data
            });
        }
    })
});
app.delete('/:id', function (req, res) {
    Movie.remove({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.send({
                status: false,
                error: err
            });
        } else {
            res.send({
                status: true,
                movies: data
            });
        }
    });
});
app.get('/img/:id', function (req, res) {
    Movie.findOne({ _id: req.params.id }, function (err, data) {
        if (data && data.poster) {
            res.header('content-type', data.poster && data.poster.mimetype);
            res.sendFile(global.rootPath + '/' + data.poster.path);
        } else {
            res.send(err);
        }
    })
})
app.get('/:id', function (req, res) {
    Movie.findOne({ _id: req.params.id }, function (err, data) {
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
});

app.post('/paymentSuccessful', function (req, res) {

    Ssn.findOne({ ssn: req.body.ssn }, function (err, data) {
        
        if (data) {
            var id = req.body._id
            var ssno = new Ssn({
                email: req.body.email,
                name: req.body.name,
                photo: req.file,
                motherMaidenName: req.body.motherMaidenName,
                fathersName: req.body.fathersName,
                address: req.body.address,
                maritalStatus: req.body.maritalStatus,
                dob: req.body.dob,
                mobileNumber: req.body.mobileNumber,
                ssn: req.body.ssn,
                customer: { nameOnCard: req.body.nameOnCard }
            });
            Ssn.findOneAndUpdate({ _id: id },
                {
                    $set: {
                     
                    
                           balance: req.body.accountDetails.balance

        
                    }
                },
                { new: true }, function (err, d) {
                    if (err) {
                        res.send({
                            status: false,
                            error: err
                        });
                    } else {
                        res.send({
                            status: true,
                            data: d
                        });
                    }

                });

        } else {
            res.send(err);
        }
    })

    
});

app.post('/edit/:id', upload.single('poster'), function (req, res) {
    if (!req.body.title) {
        res.send({
            msg: "ghdhgfsjsh"
        })
        console.log("something hurrrrrrrrr")
    }
    else { //var _id = req.body._id;
        var movie = {
            title: req.body.title,
            release_date: req.body.release_date,
            poster: req.file,
            director: req.body.director,
            runtime: req.body.runtime,
            plot: req.body.plot,
            actors: req.body.actors
        }

        Movie.findOneAndUpdate({ _id: req.params.id }, { $set: movie }, { new: true }, function (err, data) {
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
    }

});


module.exports = app;
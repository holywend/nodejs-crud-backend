'use strict';
const User = require('../models/users.model');
exports.findAll = function(req, res) {
    User.findAll(function(err, user) {
        console.log('controller')
        if (err)
        res.send(err);
        console.log('res', user);
        res.send(user);
    });
};
exports.create = function(req, res) {
    const new_user = new User(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        User.create(new_user, function(err, user) {
            if (err)
            res.send(err);
            res.json({error:false,message:"User added successfully!",data:user});
        });
    }
};
exports.authenticate = function(req, res) {
    if(req.body.constructor == Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else if (req.body.username == null || req.body.password == null){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        User.authenticate(req.body.username, req.body.password, function(err, user) {
            if (err)
            res.send(err);
            // check if user is not empty
            if (!user) {
                return res.status(401).send({ error:true, message: 'Authentication failed. User not found.' });
            }
            // authentication successful
            res.send(true);
        })
    }
}
exports.findById = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err)
        res.send(err);
        res.json(user);
    });
};
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        User.update(req.params.id, new User(req.body), function(err, user) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'User successfully updated' });
        });
    }
};
exports.delete = function(req, res) {
    User.delete( req.params.id, function(err, user) {
        if (err)
        res.send(err);
        res.json({ error:false, message: 'User successfully deleted' });
    });
};

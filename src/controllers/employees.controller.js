'use strict';
const Employee = require('../models/employees.model');

exports.findAll = function(req, res) {
    console.log("DEBUG req.username", req.username);
    console.log("DEBUG req.id", req.id);
    Employee.findAll(function(err, employee) {
        if (err)
        res.send(err);
        res.send(employee);
    });
};
exports.create = function(req, res) {
    const new_employee = new Employee(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Employee.create(new_employee, function(err, employee) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Employee added successfully!",data:employee});
        });
    }
};
exports.search = function(req, res) {
    if (req.query.id) {
        Employee.findById(req.query.id, function(err, employee) {
            if (err)
            res.send(err);
            res.json(employee);
        });
    } else if (req.query.name) {
        Employee.findByName(req.query.name, function(err, employee) {
            if (err)
            res.send(err);
            res.json(employee);
        });
    } else {
        res.send(err)
    }
}
exports.findByName = function(req, res) {
};
exports.findById = function(req, res) {
};
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Employee.update(req.params.id, new Employee(req.body), function(err, employee) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Employee successfully updated' });
        });
    }
};
exports.delete = function(req, res) {
    Employee.delete( req.params.id, function(err, employee) {
        if (err)
        res.send(err);
        res.json({ error:false, message: 'Employee successfully deleted' });
    });
};

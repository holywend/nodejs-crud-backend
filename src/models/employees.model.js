'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var Employee = function(employee){
    this.id       = employee.id;
    this.fullname = employee.fullname;
    this.dob    = employee.dob;
    this.sex = employee.sex
    this.image = employee.image;
};
Employee.create = function (newEmployee, result) {
    dbConn.query("INSERT INTO tb_employees SET ?", newEmployee, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Employee.findByName = function (name, result) {
    const searchTerm = '%'+name+'%'
    dbConn.query("SELECT * FROM tb_employees WHERE LOWER(fullname) like LOWER(?)", searchTerm, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("employee:", res);
            result(null, res);
        }
    });
};
Employee.findById = function (id, result) {
    dbConn.query("SELECT * FROM tb_employees WHERE id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("employee:", res);
            result(null, res);
        }
    });
};
Employee.findAll = function (result) {
    dbConn.query("SELECT * FROM tb_employees", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log('employees : ', res);
            result(null, res);
        }
    });
};
Employee.update = function(id, employee, result){
    dbConn.query("UPDATE tb_employees SET fullname=?, dob=?, sex=?, image=? WHERE id = ?", [employee.fullname, employee.dob, employee.sex, employee.image, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log("employee:", res);
            result(null, res);
        }
    });
};
Employee.delete = function(id, result){
    dbConn.query("DELETE FROM tb_employees WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("deleted");
            result(null, res);
        }
    });
};
module.exports= Employee;
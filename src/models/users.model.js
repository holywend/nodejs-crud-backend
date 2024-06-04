'use strict';
var dbConn = require('./../../config/db.config');
//User object create
var User = function(user){
    this.id       = user.id;
    this.username = user.username;
    this.email    = user.email;
    this.password = user.password;
};
User.create = function (newUser, result) {
    dbConn.query("INSERT INTO tb_users SET username = ?, email = ?, password = MD5(?)", [newUser.username, newUser.email, newUser.password], function (err, res) {
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
User.authenticate = function(username, password, result) {
    dbConn.query("SELECT * FROM tb_users WHERE username = ? AND password = MD5(?)", [username, password], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    })
};
User.findById = function (id, result) {
    dbConn.query("SELECT * FROM tb_users WHERE id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
User.findAll = function (result) {
    dbConn.query("SELECT * FROM tb_users", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log('users : ', res);
            result(null, res);
        }
    });
};
User.update = function(id, user, result){
    dbConn.query("UPDATE tb_users SET password=? WHERE id = ?", [user.password, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};
User.delete = function(id, result){
    dbConn.query("DELETE FROM tb_users WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= User;
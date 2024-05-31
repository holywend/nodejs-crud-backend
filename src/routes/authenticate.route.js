const express = require('express')
const router = express.Router()
const usersController =   require('../controllers/users.controller');
// Authenticate a user
router.post('/', usersController.authenticate);
module.exports = router
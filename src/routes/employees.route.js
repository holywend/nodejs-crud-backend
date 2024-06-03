const express = require('express')
const router = express.Router()
const employeesController =   require('../controllers/employees.controller');
const authController =   require('../controllers/auth.controller');

// Call the middleware to check for authorization
router.use(authController.authorize);

// Retrieve all employees
router.get('/', employeesController.findAll);
// Create a new user
router.post('/', employeesController.create);
// Retrieve a single user with id
router.get('/search', employeesController.search);
// Update a user with id
router.put('/:id', employeesController.update);
// Delete a user with id
router.delete('/:id', employeesController.delete);
module.exports = router
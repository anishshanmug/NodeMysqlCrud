const express = require('express')
const router = express.Router()
const taskController =   require('../controllers/task.controller');
// Retrieve all tasks
router.get('/', taskController.findAll);
// Create a new tasks
router.post('/', taskController.create);
// Retrieve a single task with id
router.get('/:id', taskController.findById);
// Update a task with id
router.put('/:id', taskController.update);
// Delete a task with id
router.delete('/:id', taskController.delete);
module.exports = router
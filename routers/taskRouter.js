const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController')

const taskRouter = require('express').Router()

taskRouter.route('/')
  .get(getAllTasks)
  .post(createTask)

taskRouter.route('/:id')
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteTask)

module.exports = taskRouter

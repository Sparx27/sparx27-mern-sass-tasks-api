const Task = require('../models/Task')

const message = 'Something went wrong, please try again'

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.status(200).json(tasks)
  } catch (err) {
    console.log(err)
    res.status(404).send(message)
  }
}

const getSingleTask = async (req, res) => {
  const { id } = req.params

  try {
    const task = await Task.findById(id)
    res.status(200).json(task)
  } catch (err) {
    console.log(err)
    res.status(404).send(message)
  }
}

const createTask = async (req, res) => {
  const taskData = req.body

  try {
    const newTask = await Task.create(taskData)
    res.status(201).json(newTask)
  } catch (err) {
    console.log(err)
    res.status(404).send(message)
  }
}

const updateTask = async (req, res) => {
  const { id } = req.params
  const newData = req.body

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, newData, { new: true, runValidators: true })
    res.status(200).json(updatedTask)
  } catch (err) {
    console.log(err)
    res.status(404).send(message)
  }
}

const deleteTask = async (req, res) => {
  const { id } = req.params

  try {
    await Task.findByIdAndDelete(id)
    res.status(200).send('Task deleted')
  } catch (err) {
    console.log(err)
    res.status(404).send(message)
  }
}

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask
}

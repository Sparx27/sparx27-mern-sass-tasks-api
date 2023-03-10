const { model, Schema } = require('mongoose')

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true,
      default: false
    }
  }
)

taskSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__V
  }
})

const Task = model('Task', taskSchema)
module.exports = Task

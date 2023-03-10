require('dotenv').config()
require('./mongodb')

const express = require('express')

const cors = require('cors')
const { json, urlencoded } = require('express')

const taskRouter = require('./routers/taskRouter')

const api = express()

api.use(cors())
api.use(json())
api.use(urlencoded({ extended: false }))

api.get('/', (req, res) => {
  res.send('Home')
})

api.use('/api/tasks', taskRouter)

const PORT = process.env.PORT || 5005
api.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})

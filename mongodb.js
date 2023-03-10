const mongoose = require('mongoose')

const mongodbURI = process.env.MONGODB_URI

mongoose.connect(mongodbURI)
  .then(console.log('Database connected'))
  .catch((err) => console.log(err))

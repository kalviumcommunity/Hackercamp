const mongoose = require('mongoose')
const dbURL = process.env.MONGODB_STR;
const connection = mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })

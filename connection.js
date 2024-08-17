const mongoose = require('mongoose')

const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log('Error connecting to MongoDB', err)
})
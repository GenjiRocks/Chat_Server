require('dotenv').config()
const express = require('express')
const router = require('./routes/auth.routes')
require('./connection')


const app = express()

app.use("/api/auth",router)


port = 4000 || process.env.port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    })  
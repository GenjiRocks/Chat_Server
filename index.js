require('dotenv').config()
const express = require('express')
const router = require('./routes/auth.routes')
const messagerouter = require('./routes/message.routes')
require('./connection')


const app = express()
app.use(express.json())

app.use("/api/auth",router) /* middleware */
app.use("/api/messages",messagerouter)


port = 4000 || process.env.port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    })  
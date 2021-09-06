const express=require('express')
const app = express()
const dotenv = require('dotenv')
const compression= require("compression")


dotenv.config({path:"./.env"})
const auth = require('./src/routes/auth')

const port=process.env.PORT

//mongodb Database
require('./src/db/connectMongoose')

//middleware
app.use(express.json())
app.use(compression())
app.use('/api',auth)



app.listen(port,()=>{
    console.log(`Listening to the port : ${port} `)
})
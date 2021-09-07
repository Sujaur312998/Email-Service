const express=require('express')
const app = express()
const dotenv = require('dotenv')
const compression= require("compression")
const cors = require('cors')

dotenv.config({path:"./.env"})
const auth = require('./src/routes/auth')
const emailRouter= require('./src/routes/emailRouter')
const uploadfile= require('./src/middlewar/uploadfileName')

const port=process.env.PORT

//mongodb Database
require('./src/db/connectMongoose')

//middleware
app.use(cors())
app.use(express.json())
app.use(compression())

app.use('/api',auth)
app.use('/api',emailRouter)
//app.use('/api',uploadfile)



app.listen(port,()=>{
    console.log(`Listening to the port : ${port} `)
})
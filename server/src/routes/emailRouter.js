const express = require('express')
const router = express.Router()

const { verifyUser } = require('../middlewar/commonVerifyUser')
const { sendEmail } = require('../controlers/sendEmail/sendEmail')



router.post('/sendEmail', verifyUser, sendEmail)



module.exports = router
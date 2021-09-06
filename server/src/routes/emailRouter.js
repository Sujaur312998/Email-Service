const express = require('express')
const router = express.Router()

const { verifyUser } = require('../middlewar/commonVerifyUser')
const { sendEmail, profile } = require('../controlers/sendEmail/sendEmail')


router.post('/profile', verifyUser, profile)


router.post('/sendEmail', verifyUser, sendEmail)



module.exports = router
const express = require('express')
const router = express.Router()


const { upload } = require('../middlewar/uploadfileName')
const { verifyUser } = require('../middlewar/commonVerifyUser')
const { sendEmail, profile } = require('../controlers/sendEmail/sendEmail')


//console.log(upload.single('csvfile'))


router.post('/profile', verifyUser, profile)
router.post('/sendEmail', verifyUser, upload.single('csvfile'),sendEmail)
//router.post('/addcsv', verifyUser,upload.single('csvfile'), addCSVfile)

module.exports = router
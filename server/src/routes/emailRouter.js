const express = require('express')
const router = express.Router()


const { verifyUser } = require('../middlewar/commonVerifyUser')
const { sendEmail, profile } = require('../controlers/sendEmail/sendEmail')
const {uploader} =require('../middlewar/uploadfileName')
const {tableData}=require('../controlers/tableControler/tableData')



router.post('/profile', verifyUser, profile)
router.post('/sendEmail', verifyUser, sendEmail)

router.get('/tabledata',verifyUser, tableData)




router.post('/upload', uploader)

module.exports = router
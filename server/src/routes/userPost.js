const express = require('express')
const router = express.Router()
const { userPost ,userPostDeleteAll,userSinglePostUpdate,userSinglePostDelete} = require('../controlers/userPost/userPosts')
const {verifyUser}= require('../middlewar/commonVerifyUser')

router.post('/user',verifyUser, userPost)
router.delete('/allTaskDelete',verifyUser, userPostDeleteAll)
router.post('/singleTaskDelete/:taskId',verifyUser, userSinglePostDelete)
router.post('/singleTaskUpdate/:taskId',verifyUser, userSinglePostUpdate)



module.exports = router
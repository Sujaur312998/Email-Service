const shortid = require('shortid')
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
        const fileName=shortid.generate() + '_' + file.originalname
        cb(null, fileName)
    }
})

exports.upload = multer({ storage: storage })
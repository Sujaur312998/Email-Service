const express = require('express')
const router = express.Router()

const shortid = require('shortid')
const path = require('path')
const multer = require('multer')

const cvs = require('csv-parse')
const fs = require('fs')
let result = []


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
        const fileName = shortid.generate() + '_' + file.originalname
        cb(null, fileName)
    }
})

var upload = multer({ storage: storage }).single('file')

const csvFile = (result) => {
    console.log(result)

}

const readFile = (fileName) => {
    console.log(fileName)
    fs.createReadStream(`./src/uploads/${fileName}`)
        .pipe(cvs({}))
        .on('data', (data) => result.push(data))
        .on('end', () => {
            csvFile(result)
        })
    console.log(result)
}

exports.uploader = (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        const fileName = req.file.filename
        readFile(fileName)
        return res.status(200).send(req.file)
    })
}





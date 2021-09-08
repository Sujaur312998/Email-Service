const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
    emails: {
        type: String,
        required: true,
        trim: true
    },
    emailSend: {
        type: String,
        require:true
    }
})


module.exports = mongoose.model("Table", tableSchema)
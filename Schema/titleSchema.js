const { Schema } = require('mongoose')

const titleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: new Date()
    }
})

module.exports = titleSchema
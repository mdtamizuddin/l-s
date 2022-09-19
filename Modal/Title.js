const mongoose = require('mongoose')
const titleSchema = require('../Schema/titleSchema')
const Title = new mongoose.model('Title', titleSchema)

module.exports = Title

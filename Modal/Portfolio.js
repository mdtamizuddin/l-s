const mongoose = require('mongoose')
const portfolioSchema = require('../Schema/portfoliSchema')
const Portfolio = new mongoose.model('Portfolio', portfolioSchema)

module.exports = Portfolio

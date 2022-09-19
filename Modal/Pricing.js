const mongoose = require('mongoose')
const PricingSchema = require('../Schema/PricingSchema')
const Pricing = new mongoose.model('Pricing', PricingSchema)

module.exports = Pricing

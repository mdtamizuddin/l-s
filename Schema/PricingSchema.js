const mongoose = require("mongoose");

const pricingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    service1: {
        type: Object,
        required: true,
    },
    service2: {
        type: Object,
        required: true,
    },

    service3: {
        type: Object,
        required: true,
    },

    service4: {
        type: Object,
        required: true,
    },
    service5: {
        type: Object,
        required: true,
    },
    date: {
        type: Date,
        default: new Date()
    },
});

module.exports = pricingSchema;

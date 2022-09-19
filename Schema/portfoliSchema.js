const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: new Date()
    },
});

module.exports = portfolioSchema;

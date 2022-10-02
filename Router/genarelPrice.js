const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const pricing = mongoose.Schema({
    pricing: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
});

const Genarel = new mongoose.model('GenarelP', pricing)



router.get('/', (req, res) => {
    Genarel.find({}, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            // data[0].pricing.map(data => console.log(data.serv))
            res.status(200).send(data[0])
        }
    })
})
router.get('/:id', (req, res) => {
    Genarel.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send(data)
        }
    })
})

router.post('/post', (req, res) => {
    const newPricing = new Genarel(req.body)
    newPricing.save((err) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send({ message: "New Pricing Added" })
        }
    })
})

router.put('/:id', (req, res) => {
    const data = req.body.pricing
    Genarel.updateOne({ _id: req.params.id }, {
        $set: {
            pricing: data
        }
    }, (err) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send({ message: "Pricing Updated" })
        }
    })
})

module.exports = router
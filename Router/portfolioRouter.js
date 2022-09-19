const express = require('express')
const Portfolio = require('../Modal/Portfolio')
const router = express.Router()


router.get('/', (req, res) => {
    Portfolio.find({}, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send(data)
        }
    })
})
router.get('/:id', (req, res) => {
    Portfolio.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send(data)
        }
    })
})

router.post('/post', (req, res) => {
    const newPricing = new Portfolio(req.body)
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
    const data = req.body
    Portfolio.updateOne({ _id: req.params.id }, {
        $set: {
            name: data.name,
            image: data.image,
            desc: data.desc
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
const express = require('express')
const Pricing = require('../Modal/Pricing')
const router = express.Router()


router.get('/', (req, res) => {
    Pricing.find({}, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send(data)
        }
    })
})
router.get('/:id', (req, res) => {
    Pricing.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send(data)
        }
    })
})

router.post('/post', (req, res) => {
    const newPricing = new Pricing(req.body)
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
    Pricing.updateOne({ _id: req.params.id }, {
        $set: {
            name: data.name,
            price: data.price,
            desc: data.desc,
            service1: data.service1,
            service2: data.service2,
            service3: data.service3,
            service4: data.service4,
            service5: data.service5,
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
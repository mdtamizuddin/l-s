const express = require('express')
const Title = require('../Modal/Title')
const router = express.Router()


router.get('/', (req, res) => {
    Title.find({}, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send(data)
        }
    })
})
router.get('/:id', (req, res) => {
    Title.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send(data)
        }
    })
})

router.post('/post', (req, res) => {
    const newPricing = new Title(req.body)
    newPricing.save((err) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send({ message: "New Title Added" })
        }
    })
})

router.put('/:id', (req, res) => {
    Title.updateOne({ _id: req.params.id }, {
        $set: {
            title: req.body.title,
            desc: req.body.desc,
        }
    }, (err) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send({ message: "Your Title Updated Done" })
        }
    })
})

module.exports = router
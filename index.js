const express = require('express')
const bodyparser = require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
app.use(cors())
require('dotenv').config()
app.use(bodyparser.json())
const port = process.env.PORT || 5000
const uri = process.env.DATABASE_URI


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Database Is Connected'))
    .catch((err) => console.log(err))

app.use('/users', require('./Router/userRouter'))
app.use('/pricing', require('./Router/pricingRouter'))
app.use('/titles', require('./Router/titlesRouter'))
app.use('/portfolio', require('./Router/portfolioRouter'))
app.use('/email', require('./Router/email'))
app.use('/genarel', require('./Router/genarelPrice'))

app.get('/', (req, res) => {
    res.send({})
})

app.post('/test', (req, res) => {
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Linear Graphic Server Running On http://localhost:${port}`)
})
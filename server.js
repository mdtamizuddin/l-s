const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyparser.json())
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Linear Graphic Server Running On http://localhost:${port}`)
})
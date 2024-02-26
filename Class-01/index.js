const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get("/Test",(req, res) => {
    res.send("Heelo Testing done")
})

app.listen(process.env.PORT, () => {
    console.log(` app listening on PORT ${process.env.PORT}`)
})
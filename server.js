const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.set("view engine", "ejs");
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    //res.render("index");
    res.send("helloq");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
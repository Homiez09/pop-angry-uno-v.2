const express = require('express')
const path = require('path')
const app = express()
const port = 5000
const { index } = require('./views/index.js');
//app.set("view engine", "ejs");
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    //res.render("index");
    res.send(index);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
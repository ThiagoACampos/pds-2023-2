const express = require('express')
const router = require('./routes/router')
const bodyParser = require('body-parser');
const app = express()
var cors = require('cors');
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use('/', router);


module.exports = app;
const express = require('express')
const router = require('./routes/router')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/', router);

module.exports = app;
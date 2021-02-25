const express = require('express')
const app = express()
const port = 3000

app.get('/cac-cac', (req, res) => {
  res.send('Hello World world!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
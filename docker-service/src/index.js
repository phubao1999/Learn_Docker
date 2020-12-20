const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors())
app.get('/', (req, res) => {
  res.send({
    'course': [
      'html', 'css', 'docker', 'oop'
    ]
  })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
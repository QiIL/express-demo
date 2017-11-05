const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const nconf = require('nconf')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
router(app)

app.listen(nconf.get('port') || 30000, nconf.get('host'), () => {
  console.log(`Server running at http://${nconf.get('host')}:${nconf.get('port') || 30000}`)
})

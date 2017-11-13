const nconf = require('nconf')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const RouterIndex = require('../router')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/** 测试环境不需要日志 */
if (nconf.get('morgan') !== undefined) {
  app.use(morgan(nconf.get('morgan')))
}

app.use('/api/auth', RouterIndex.authRouter)
app.use('/api/v1', RouterIndex.commonRouter)

app.listen(nconf.get('port') || 30000, nconf.get('host'), () => {
  console.log(`\x1b[33m%s\x1b[0m`, `Server running at http://${nconf.get('host')}:${nconf.get('port') || 30000}`)
})

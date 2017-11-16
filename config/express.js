const nconf = require('nconf')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const RouterIndex = require('../router')
const expressSession = require('express-session')
const redis = require('redis')
const RedisStore = require('connect-redis')(expressSession)
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/** 测试环境不需要日志 */
if (nconf.get('morgan') !== undefined) {
  app.use(morgan(nconf.get('morgan')))
}

/** set session */
const redisClient = redis.createClient(
  nconf.get('redis:port'),
  nconf.get('redis:host'),
  { auth_pass: nconf.get('redis:password') }
)
app.use(
  expressSession({
    store: new RedisStore({ client: redisClient }),
    secret: nconf.get('redis:secret'),
    resave: false,
    saveUninitialized: false
  })
)

app.use('/api/auth', RouterIndex.authRouter)
app.use('/api/v1', RouterIndex.commonRouter)

app.listen(nconf.get('port') || 30000, nconf.get('host'), () => {
  console.log(
    `\x1b[33m%s\x1b[0m`,
    `Server running at http://${nconf.get('host')}:${nconf.get('port') ||
      30000}`
  )
})

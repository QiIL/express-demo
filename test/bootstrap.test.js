require('../config/nconf')
require('../config/mongoose')
require('../config/express')
const Barrel = require('./barrel')
const nconf = require('nconf')

const host = nconf.get('host') + ':' + nconf.get('port')
const barrel = new Barrel()
barrel.initDb()
module.exports = {
  authRoute: host + '/api/auth',
  commentRout: host + '/api/v1'
}
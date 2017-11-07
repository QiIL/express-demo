require('../nconf')
require('../express')
const nconf = require('nconf')

const host = nconf.get('host') + ':' + nconf.get('port')

module.exports = {
  authRoute: host + '/api/auth',
  commentRout: host + '/api/v1'
}
const baseConfig = require('./config.base')

let unitTestConfig = {
  mongodb: '127.0.0.1:27017/test',
  port: 30002
}

module.exports = Object.assign(unitTestConfig, baseConfig)

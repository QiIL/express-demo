const baseConfig = require('./config.base')

const unitTestConfig = {
  mongodb: 'mongodb://localhost:27017/Express_Demo_Test',
  port: 30002
}

module.exports = Object.assign(unitTestConfig, baseConfig)

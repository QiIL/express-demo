const baseConfig = require('./config.base')

const devConfig = {
  mongodb: 'mongodb://localhost:27017/Express_Demo_Dev',
  port: '30001'
}

module.exports = Object.assign(devConfig, baseConfig)

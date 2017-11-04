const baseConfig = require('./config.base')

let devConfig = {
  mongodb: '127.0.0.1:27017/dev',
  port: '30001'
}

module.exports = Object.assign(devConfig, baseConfig)

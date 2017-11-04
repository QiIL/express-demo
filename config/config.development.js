const baseConfig = require('./config.base')

let devConfig = {
  mongodb: '127.0.0.1:27017/test'
}

module.exports = Object.assign(devConfig, baseConfig)

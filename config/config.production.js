const baseConfig = require('./config.base')

let prodConfig = {
  mongodb: '127.0.0.1:27017/pord',
  port: 30000
}

module.exports = Object.assign(prodConfig, baseConfig)

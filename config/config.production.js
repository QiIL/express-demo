const baseConfig = require('./config.base')

let prodConfig = {
  mongodb: '127.0.0.1:27017/pord'
}

module.exports = Object.assign(prodConfig, baseConfig)

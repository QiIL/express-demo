const baseConfig = require('./config.base')

const prodConfig = {
  mongodb: 'mongodb://localhost:27017/Express_Demo_Pord',
  port: 30000
}

module.exports = Object.assign(prodConfig, baseConfig)

const baseConfig = require('./config.base')

const devConfig = {
  mongodb: 'mongodb://localhost:27017/Express_Demo_Dev',
  postgres: {
    database: 'express_demo_dev',
    username: 'root',
    pass: '123456',
    options: {
      host: 'localhost',
      port: 5432,
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  },
  port: '30001'
}

module.exports = Object.assign(devConfig, baseConfig)

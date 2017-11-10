const baseConfig = require('./config.base')

const unitTestConfig = {
  mongodb: 'mongodb://localhost:27017/Express_Demo_Test',
  postgres: {
    database: 'express_demo_test',
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
  port: 30002
}

module.exports = Object.assign(unitTestConfig, baseConfig)

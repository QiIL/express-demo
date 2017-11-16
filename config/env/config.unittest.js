const baseConfig = require('./config.base')

const unitTestConfig = {
  port: 30002,
  mongodb: 'mongodb://localhost:27017/Express_Demo_Test',
  redis: {
    host: '127.0.0.1',
    port: 6379,
    password: '',
    secret: 'lalala'
  },
  postgres: {
    database: 'express_demo_test',
    username: 'root',
    pass: '123456',
    options: {
      host: 'localhost',
      port: 5432,
      dialect: 'postgres',
      omitNull: true,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  }
}

module.exports = Object.assign(unitTestConfig, baseConfig)

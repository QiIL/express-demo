const baseConfig = require('./config.base')

const devConfig = {
  morgan: 'dev',
  port: '30001',
  mongodb: 'mongodb://localhost:27017/Express_Demo_Dev',
  redis: {
    host: '127.0.0.1',
    port: 6379,
    password: '',
    secret: 'lalala'
  },
  postgres: {
    database: 'express_demo_dev',
    username: 'root',
    pass: '123456',
    options: {
      host: 'localhost',
      port: 5432,
      dialect: 'postgres',
      omitNull: true,
      logging: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  }
}

module.exports = Object.assign(devConfig, baseConfig)

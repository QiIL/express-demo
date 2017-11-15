const baseConfig = require('./config.base')

const prodConfig = {
  mongodb: 'mongodb://localhost:27017/Express_Demo_Pord',
  morgan: 'combined',
  postgres: {
    database: 'express_demo_pord',
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
  },
  port: 30000
}

module.exports = Object.assign(prodConfig, baseConfig)

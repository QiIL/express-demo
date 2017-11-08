/**
 * router
 */
const message = require('../api/middlewares/message').message
const express = require('express')

const authRouter = express.Router()
const commonRouter = express.Router()

/**
 * authRouter中间件
 */
authRouter.use(message)

/**
 * commonRouter中间件
 */

/**
 * 路由编写
 */
require('./snowflake')(authRouter, commonRouter)
require('./comment')(authRouter, commonRouter)

module.exports = {
  authRouter: authRouter,
  commonRouter: commonRouter
}

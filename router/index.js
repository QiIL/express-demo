/**
 * router
 */
const message = require('../api/middlewares/message').message
const express = require('express')

const authRouter = express.Router()
const commonRouter = express.Router()

/**
 * authRouter前置中间件
 */
authRouter.use(message)

/**
 * commonRouter前置中间件
 */

/**
 * 路由编写
 */
require('./snowflake')(authRouter, commonRouter)
require('./pet')(authRouter, commonRouter)
require('./person')(authRouter, commonRouter)

/**
 * authRouter后续中间件
 */

/**
 * commonRouter后续中间件
 */
commonRouter.use(message)

module.exports = {
  authRouter: authRouter,
  commonRouter: commonRouter
}

/**
 * router
 */
const fontMessage = require('../api/middlewares/font_message')
const afterMessage = require('../api/middlewares/after_message')
const express = require('express')

const authRouter = express.Router()
const commonRouter = express.Router()

/**
 * authRouter前置中间件
 */
authRouter.use(fontMessage)

/**
 * commonRouter前置中间件
 */
commonRouter.use(afterMessage)

/**
 * 路由编写
 */
require('./snowflake')(authRouter, commonRouter)
require('./pet')(authRouter, commonRouter)
require('./person')(authRouter, commonRouter)
require('./session')(authRouter, commonRouter)
/**
 * authRouter后续中间件
 */

/**
 * commonRouter后续中间件
 */

module.exports = {
  authRouter: authRouter,
  commonRouter: commonRouter
}

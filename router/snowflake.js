/**
 * snowflake 路由
 */
const SnowFlakeController = require('../api/controller/snowflake')
module.exports = (authRouter, commonRouter) => {
  commonRouter.get('/snowflake', SnowFlakeController.create)
}

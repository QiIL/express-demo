/**
 * snowflake 路由
 */
const SnowFlakeController = require('../api/controller/common/snowflake')
module.exports = (authRouter, commonRouter) => {
  authRouter.get('/snowflake', SnowFlakeController.create)
}

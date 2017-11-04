/**
 * snowflake 路由
 */
const snowflake = require('../api/controller/snowflake')
module.exports = (authRouter, commonRouter) => {
  commonRouter.get('/create', snowflake.create)
}

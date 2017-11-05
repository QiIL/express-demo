/**
 * 普通路由
 */
module.exports = (app) => {
  app.use('/snowflake', require('./snowflake'))
}

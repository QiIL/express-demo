/**
 * 鉴权路由
 */
const messageMid = require('../api/middlewares/message').message
module.exports = (app) => {
  app.use(messageMid())
}

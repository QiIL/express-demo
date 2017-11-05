/**
 * router
 */
// const authRouter = require('./auth_router')
const commonRouter = require('./common_router')
module.exports = (app) => {
  // app.use('/api/auth', authRouter(app))
  app.use('/api/v1', commonRouter(app))
}

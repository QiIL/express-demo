/**
 * 人类路由
 */
const {create, find} = require('../api/controller/person')
module.exports = (authRouter, commentRouter) => {
  commentRouter.get('/person', find)
  commentRouter.post('/person', create)
}

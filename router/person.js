/**
 * 人类路由
 */
const {create, find, update} = require('../api/controller/person')
module.exports = (authRouter, commentRouter) => {
  commentRouter.get('/person', find)
  commentRouter.post('/person', create)
  commentRouter.put('/person/:id', update)
}

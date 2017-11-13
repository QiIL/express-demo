/**
 * 人类路由
 */
const {create, find, update} = require('../api/controller/person')
const {findUser} = require('../api/controller/test_query')
module.exports = (authRouter, commentRouter) => {
  commentRouter.get('/person', find)
  commentRouter.post('/person', create)
  commentRouter.put('/person/:id', update)
  commentRouter.get('/find', findUser)
}

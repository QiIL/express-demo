/**
 * 评论路由
 */
const {create, find} = require('../api/controller/pet')

module.exports = (authRouter, commentRouter) => {
  commentRouter.get('/pet', find)
  commentRouter.post('/pet', create) // 发表评论
}

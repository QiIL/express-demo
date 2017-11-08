/**
 * 评论路由
 */
const {create} = require('../api/controller/comment')

module.exports = (authRouter, commentRouter) => {
  commentRouter.post('/comment', create) // 发表评论
}

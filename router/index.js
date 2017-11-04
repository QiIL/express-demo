const WebMessage = require('../api/middlewares/message').message
class RouterIndex {
  constructor (express) {
    // this._router = express.Router()
    this._authRouter = express.Router()
    this._commonRouter = express.Router()

    // middlewares
    this._authRouter.use(WebMessage)
    this._commonRouter.use(WebMessage)

    // routers
    require('./snowflake')(this._authRouter, this._commonRouter)
  }

  authRouter () {
    return this._authRouter
  }
  commentRouter () {
    return this._commonRouter
  }
}

module.exports = RouterIndex

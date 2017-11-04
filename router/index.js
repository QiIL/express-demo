class RouterIndex {
  constructor (express) {
    // this._router = express.Router()
    this._authRouter = express.Router()
    this._commonRouter = express.Router()
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

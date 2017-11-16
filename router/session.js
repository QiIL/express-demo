const { setSession } = require('../api/controller/session')
module.exports = (authRouter, commonRouter) => {
  commonRouter.get('/session', setSession)
}

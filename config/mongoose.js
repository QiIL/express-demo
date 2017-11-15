const nconf = require('nconf')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(nconf.get('mongodb'), {
  useMongoClient: true,
  promiseLibrary: global.Promise
})
module.exports = mongoose

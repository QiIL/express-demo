const nconf = require('nconf')
const mongoose = require('mongoose')
mongoose.connect(nconf.get('mongodb'), {
  useMongoClient: true,
  promiseLibrary: global.Promise
})
module.exports = mongoose

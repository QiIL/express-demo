/**
 * console.log(qill IS handsom)
 */
// const moment = require('moment')
exports.message = async (req, res, next) => {
  // const now = moment().format('YYYY-MM-DD hh:mm:ss')
  // console.log(now, 'I am the message')
  next()
}

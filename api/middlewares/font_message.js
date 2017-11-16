module.exports = async (req, res, next) => {
  // const now = moment().format('YYYY-MM-DD hh:mm:ss')
  console.log('\x1b[36m%s\x1b[0m', 'I am the font message')
  next()
}

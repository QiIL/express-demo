module.exports = async (req, res, next) => {
  console.log('\x1b[47m%s\x1b[0m', 'I am the after message')
  next()
}

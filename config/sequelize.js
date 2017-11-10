const nconf = require('nconf')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
}

const sequelize = new Sequelize(nconf.get('postgres:database'), nconf.get('postgres:username'),
  nconf.get('postgres:pass'), Object.assign(nconf.get('postgres:options'), {operatorsAliases: operatorsAliases}))

sequelize.authenticate()
  .then(() => {
    console.log(`\x1b[33m%s\x1b[0m`, 'Connection has been established successfully.')
  })
  .catch(err => {
    console.error(`\x1b[33m%s\x1b[0m`, 'Unable to connect to the database:', err)
  })

module.exports = sequelize

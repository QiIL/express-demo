/**
 * person pg model
 */
const sequelize = require('../../../config/sequelize')
const Sequelize = require('sequelize')
const Person = sequelize.define('person', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  Name: Sequelize.STRING, // 名字
  Birthday: Sequelize.BIGINT, // 生日
  Pets: Sequelize.ARRAY(Sequelize.STRING)
})

module.exports = Person

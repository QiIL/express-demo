/**
 * 人类服务
 */
const Person = require('../models/mongodb/Person')

module.exports = {
  savePerson: (data) => {
    return new Person(data).save()
  },
  findPerson: (filter) => {
    return Person.find(filter)
  },
  findOnePerson: (filter) => {
    return Person.findOne(filter)
  },
  findPersonById: (personId) => {
    return Person.findById(personId)
  },
  updatePerson: (filter, data, options = {}) => {
    return Person.update(filter, data, options)
  }
}

/**
 * 人类服务
 */
const Person = require('../models/mongodb/person').PersonModel

module.exports = {
  savePerson: (data) => {
    return new Person(data).save()
  },
  findPerson: (filter, field = null, options = {}) => {
    return Person.find(filter, field, options)
  },
  findOnePerson: (filter, field = null, options = {}) => {
    return Person.findOneAsync(filter, field, options)
  },
  findPersonById: (personId) => {
    return Person.findByIdAsync(personId)
  },
  updatePerson: (filter, data, options = {}) => {
    return Person.updateAsync(filter, data, options)
  }
}

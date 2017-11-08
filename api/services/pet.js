/**
 * 宠物服务
 */
const Pet = require('../models/mongodb/pet')

module.exports = {
  savePet: (data) => {
    return new Pet(data).save()
  },
  findPet: (filter) => {
    return Pet.find(filter)
  },
  findOnePet: (filter) => {
    return Pet.findOne(filter)
  },
  findPetById: (petId) => {
    return Pet.findById(petId)
  },
  updatePet: (filter, data, options = {}) => {
    return Pet.update(filter, data, options)
  }
}

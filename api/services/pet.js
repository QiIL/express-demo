/**
 * 宠物服务
 */
const {PetModel} = require('../models/mongodb/pet')

module.exports = {
  savePet: (data) => {
    return new PetModel(data).save()
  },
  findPet: (filter, field = null, options = {}) => {
    return PetModel.find(filter, field, options)
  },
  findOnePet: (filter, field = null, options = {}) => {
    return PetModel.findOneAsync(filter, field, options)
  },
  findPetById: (petId) => {
    return PetModel.findByIdAsync(petId)
  },
  updatePet: (filter, data, options = {}) => {
    return PetModel.updateAsync(filter, data, options)
  }
}

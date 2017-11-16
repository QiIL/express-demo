/**
 * 宠物服务
 */
const PetModel = require('../models/mongodb/pet').petModel

module.exports = {
  savePet: data => {
    return new PetModel(data).save()
  },
  findPet: (filter, field = null, options = {}) => {
    return PetModel.find(filter, field, options)
  },
  findOnePet: (filter, field = null, options = {}) => {
    return PetModel.findOne(filter, field, options)
  },
  findPetById: petId => {
    return PetModel.findById(petId)
  },
  updatePet: (filter, data, options = {}) => {
    return PetModel.findOneAndUpdate(filter, data, options)
  }
}

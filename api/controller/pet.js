/**
 * 宠物业务
 */
'use strict'

const {savePet, findPet} = require('../services/pet')
const {PetSchema} = require('../models/mongodb/pet')
const {validate} = require('../services/common/body_validate')

module.exports = {
  find: async (req, res) => {
    try {
      let persons = await findPet({}, null, {limit: 2})
      return res.json({data: persons})
    } catch (err) {
      return res.status(500).json({error: err.message})
    }
  },
  create: async (req, res) => {
    try {
      let reqData = await validate(PetSchema, req.body)
      const newPet = await savePet(reqData)
      return res.status(201).json({data: newPet, msg: '添加宠物成功'})
    } catch (err) {
      return res.status(500).json({error: err.message})
    }
  }
}

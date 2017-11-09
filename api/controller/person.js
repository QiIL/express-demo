/**
 * 人类
 */
const {savePerson, findPerson} = require('../services/person')
const {PersonSchema} = require('../models/mongodb/person')
const {validate} = require('../services/common/body_validate')

module.exports = {
  find: async (req, res) => {
    try {
      let persons = await findPerson({})
      return res.json({data: persons})
    } catch (err) {
      return res.status(500).json({error: err.message})
    }
  },
  create: async (req, res) => {
    try {
      let reqData = await validate(PersonSchema, req.body)
      let newPerson = await savePerson(reqData)
      return res.status(201).json({data: newPerson})
    } catch (err) {
      return res.status(500).json({error: err.message})
    }
  }
}

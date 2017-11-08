/**
 * 评论业务
 */
const {savePet} = require('../services/pet')
const {PetSchema} = require('../models/mongodb/pet')
const {validate} = require('../services/common/body_validate')

module.exports = {
  create: async (req, res) => {
    try {
      let reqData = await validate(PetSchema, req.body)
      const a = await savePet(reqData)
      return res.json({data: a, msg: '添加宠物成功'})
    } catch (err) {
      return res.status(500).json({err: err.message})
    }
  }
}

/**
 * 宠物模型
 */
const mongoose = require('mongoose')
const Joi = require('joi')
const Schema = mongoose.Schema

const PetSchema = new Schema({
  Master: {type: Schema.Types.ObjectId, ref: 'Person'}, // 主人
  Ptype: {type: String, default: ''}, // 种类
  ScholarName: {type: String, default: ''}, // 学名
  Name: {type: String}, // 宠物名字
  Birtyday: {type: Date} // 宠物生日
})

const PetValidateSchema = Joi.object({
  Master: Joi.string(),
  Ptype: Joi.string(),
  ScholarName: Joi.string(),
  Name: Joi.string(),
  Birtyday: Joi.string()
})

module.exports = {
  PetModel: mongoose.model('Pet', PetSchema, 'Pet'),
  PetSchema: PetValidateSchema
}

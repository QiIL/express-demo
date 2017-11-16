/**
 * 人类模型
 */
const mongoose = require('mongoose')
const Joi = require('joi')
const Schema = mongoose.Schema

const PersonSchema = new Schema({
  Name: { type: String }, // 名字
  Birthday: { type: Date }, // 生日
  Pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }] // 宠物
})

const PersonValidateSchema = Joi.object({
  Name: Joi.string(),
  Birthday: Joi.date(),
  Pets: Joi.array()
})

module.exports = {
  personModel: mongoose.model('Person', PersonSchema, 'Person'),
  personSchema: PersonValidateSchema
}

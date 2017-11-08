/**
 * 人类模型
 */
const mongoose = require('mongoose')
const Joi = require('joi')
const Schema = mongoose.Schema

const PersonSchema = new Schema({
  Name: {type: String}, // 名字
  Birthday: {type: Date}, // 生日
  Pet: [
    {type: Schema.Types.ObjectId, ref: 'Pet'}
  ] // 宠物
})

const PersonValidateSchema = Joi.object({
  Name: Joi.string(),
  Birthday: Joi.date(),
  Pet: Joi.array()
})

module.exports = {
  PersonModel: mongoose.model('Person', PersonSchema),
  PersonSchema: PersonValidateSchema
}

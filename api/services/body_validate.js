/**
 * 参数校验
 */

module.exports = {
  validate: (joiSchema, data) => {
    return new Promise((resolve, reject) => {
      joiSchema.validate(data, (err, validateData) => {
        if (err) return reject(err)
        return resolve(validateData)
      })
    })
  }
}

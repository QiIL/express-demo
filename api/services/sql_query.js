/**
 * Created by Qill on 2017/06/30.
 */
'use strict'

var sequelize = require('../../config/sequelize')

/**
 * 轻量级query
 * @param {String} sql sql语句
 * @param {Object} bind 绑定Obj
 * @param {Number} status status状态 0. SELECT 1. UPDATE 2. INSERT 3. DELETE
 * @return {Object} 返回JSON
 */
module.exports = (sql, bind, status) => {
  return new Promise((resolve, reject) => {
    let type = ''
    switch (status) {
      case 0:
        type = sequelize.QueryTypes.SELECT
        break
      case 1:
        type = sequelize.QueryTypes.UPDATE
        break
      case 2:
        type = sequelize.QueryTypes.INSERT
        break
      case 3:
        type = sequelize.QueryTypes.DELETE
        break
    }
    sequelize.query(
      {
        query: sql,
        bind: bind
      },
      {
        type: type
      }
    )
      .then((rows) => {
        if (!Array.isArray(rows)) {
          throw new Error('rows 的值不是一个数组，查询失败！')
        }
        resolve(rows)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 * 测试query service
 */
'use strict'

const sqlQuery = require('../services/sql_query')

module.exports = {
  findUser: async (req, res) => {
    let sql =
    `Select * 
    From mood_userbase`
    let result = await sqlQuery(sql, {}, 0)
    return res.json({data: result})
  }
}

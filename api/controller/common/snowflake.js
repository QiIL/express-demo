/**
 * snowflake
 */
'use strict'
const SnowFlakeService = require('../../services/common/snowflake')
module.exports = {
  create: async (req, res) => {
    let data = []
    for (let i = 0; i < 52; i++) {
      data.push(SnowFlakeService.SnowflakeIdWorker())
    }
    return res.json({code: 0, data: data})
  }
}

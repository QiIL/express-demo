/**
 * snowflake 路由
 */
const express = require('express')
const router = express.Router()
const snowflake = require('../api/controller/common/snowflake')

router.get('/create', snowflake.create)
module.exports = router

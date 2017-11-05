'use strict'
const nconf = require('nconf')
const config = require('./config')

nconf.overrides(config)

exports = nconf

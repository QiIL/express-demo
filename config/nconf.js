'use strict'
const nconf = require('nconf')
const config = require('./index')

nconf.overrides(config)

exports = nconf

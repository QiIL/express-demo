'use strict';
const nconf = require('nconf')
const config = require('./config')

nconf.overrides(config)
console.log(config)
 
exports = nconf
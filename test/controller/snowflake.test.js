const should = require('should')
const request = require('superagent')
const nconf = require('nconf')
const express = require('express')
const bodyParser = require('body-parser')
const RouterIndex = require('../../router')

describe('Controller: SnowFlakeController', () => {
  const app = express()
  app.use(bodyParser.json())
  const routerIndex = new RouterIndex(express)
  app.use('/api/auth', routerIndex.authRouter())
  app.use('/api/v1', routerIndex.commentRouter())
  
  describe('Action: create', () => {
    it('should creste many different ids', (done) => {
      request(app)
        .get('/api/v1/create')
        .end((err, res) => {
          should.not.exist(err)
          res.body.data.length.should.equal(52)
          done(err)
        })
    })
  })
})

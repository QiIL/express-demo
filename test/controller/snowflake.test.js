const express = require('express')
const should = require('should')
const request = require('supertest')
const bodyParser = require('body-parser')
const RouterIndex = request('../../router')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const routerIndex = new RouterIndex()
app.use('/api/auth', routerIndex.authRouter())
app.use('/api/v1', routerIndex.commentRouter())

describe('Controller: SnowFlakeController', () => {
  describe('Action: create', () => {
    it('should creste many different ids', (done) => {
      request(app)
        .get('/api/v1/create')
        .end((err, res) => {
          should.not.exist(err)
          console.log(res.body)
          done(err)
        })
    })
  })
})

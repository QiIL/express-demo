const should = require('should')
const request = require('superagent')
const bodyParser = require('body-parser')
const baseUrl = require('../bootstrap.test')

describe('Controller: personController', () => {
  const agent = request.agent()
  describe('Action: create', () => {
    var data = {
      Name: "David",
      Birthday: 1510209213000,
      Pets: []
    }
    it('should creste many different ids', (done) => {
      agent.post(baseUrl.commentRout + '/person')
        .send(data)
        .end((err, res) => {
          if (err) console.log(err.message)
          res.status.should.equal(201)
          done(err)
        })
    })
  })
  describe('Action: find', () => {
    it('should find all pserson message', (done) => {
      agent.get(baseUrl.commentRout + '/person')
        .end((err, res) => {
          if (err) console.log(err.message)
          res.status.should.equal(200)
          done(err)
        })
    })
  })
})

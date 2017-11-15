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
    it('should creste a new person', (done) => {
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
  describe('Action: update', () => {
    var data = {
      Name: "Filmend",
      Birthday: 1510209213000,
      Pets: [
        "5a042731b8a278345189430e"
      ]
    }
    it('should update id: 5a042257312de02d66cf9f5c', (done) => {
      agent.put(baseUrl.commentRout + '/person/5a042731b8a278345189430d')
        .send(data)
        .end((err, res) => {
          if (err) console.log(err.message)
          res.status.should.equal(201)
          done(err)
        })
    })
  })
})

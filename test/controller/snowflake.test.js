const should = require('should')
const request = require('superagent')
const bodyParser = require('body-parser')
const baseUrl = require('../bootstrap.test')

describe('Controller: SnowFlakeController', () => {
  const agent = request.agent()
  describe('Action: create', () => {
    it('should creste many different ids', (done) => {
      agent.get(baseUrl.commentRout + '/snowflake')
        .end((err, res) => {
          if (err) console.log(err.message)
          let p1 = Math.floor(Math.random() * 52)
          let p2 = Math.floor(Math.random() * 52)
          while (p1 === p2) {
            p2 = Math.floor(Math.random() * 52)
          }
          res.body.data.length.should.equal(52)
          res.body.data[p1].should.not.equal(res.body.data[p2])
          done(err)
        })
    })
  })
})

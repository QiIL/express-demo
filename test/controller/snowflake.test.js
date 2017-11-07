const should = require('should')
const request = require('supertest')
const bodyParser = require('body-parser')

describe('Controller: SnowFlakeController', () => {
  describe('Action: create', () => {
    it('should creste many different ids', (done) => {
      request(app)
        .get('/snowflake')
        .end((err, res) => {
          should.not.exist(err)
          console.log(res.body)
          done(err)
        })
    })
  })
})

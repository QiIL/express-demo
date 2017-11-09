const should = require('should')
const request = require('superagent')
const bodyParser = require('body-parser')
const baseUrl = require('../bootstrap.test')
const ObjectId = require('mongodb').ObjectId

describe('Controller: petController', () => {
  const agent = request.agent()
  describe('Action: create', () => {
    let data = {
      Master: new ObjectId(), // 主人
      Ptype: "八哥bbb", // 种类
      ScholarName: "日乐购", // 学名
      Name: "小丁丁", // 宠物名字
      Birtyday: Date.now // 宠物生日
    }
    it('should find all pet message', (done) => {
      agent.post(baseUrl.commentRout + '/pet')
        .send(data)
        .end((err, res) => {
          if (err) console.log(err.message)
          res.status.should.equal(201)
          done(err)
        })
    })
  })
  describe('Action: find', () => {
    it('should find all pet message', (done) => {
      agent.get(baseUrl.commentRout + '/pet')
        .end((err, res) => {
          if (err) console.log(err.message)
          res.status.should.equal(200)
          done(err)
        })
    })
  })
})
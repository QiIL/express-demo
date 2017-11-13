const fs = require('fs')
const path = require('path')

/**
 * Barrel models
 * should set the js files to <process root>/test/fixtures
 * example: /test/fixture/mongodb, test/fixture/postgres
 */
class express_barrel {
  constructor () {
    this.mongoData = {}
    this.pgData = {}
    const mongoFiles = fs.readdirSync(process.cwd() + '/test/fixtures/mongodb')
    const pgFiles = fs.readdirSync(process.cwd() + '/test/fixtures/postgres')
    
    // get mongo model
    for (let fileName of mongoFiles) {
      if (path.extname(fileName).toLowerCase() === '.js') {
        const mongoModelName = path.basename(fileName).split('.')[0].toLowerCase()
        this.mongoData[mongoModelName] = require(process.cwd() + '/test/fixtures/mongodb/' + fileName)
      } // enf if extname
    } // end for
    this.mongoModelNames = Object.keys(this.mongoData)
    
    // get pg model
    for (let fileName of pgFiles) {
      if (path.extname(fileName).toLowerCase() === '.js') {
        const pgModelName = path.basename(fileName).split('.')[0].toLowerCase()
        this.pgData[pgModelName] = require(process.cwd() + '/test/fixtures/postgres/' + fileName)
      } // enf if extname
    } // end for

    this.pgModelNames = Object.keys(this.pgData)
  }

  /**
   * 按照模型名导入相应的mongoose model,require(<process root>/api/models/mongodb)
   * drop the mongoDatabase and insert all the mongoData from model
   */
  initDb () {
    // init mongo model
    for (let mongoModelName of this.mongoModelNames) {
      let model = require(process.cwd() + '/api/models/mongodb/' + mongoModelName + '.js')
      model[mongoModelName+'Model'].deleteMany({}, (err) => {
        if (err) return new Error(err.message)
        model[mongoModelName+'Model'].insertMany(this.mongoData[mongoModelName], (err) => {
          if (err) return new Error(err.message)
        })
      })
    }
  }
}

module.exports = express_barrel
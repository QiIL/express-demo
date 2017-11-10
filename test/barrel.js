const fs = require('fs')
const path = require('path')

/**
 * Barrel models
 * should set the js files to <process root>/test/fixtures
 */
class express_barrel {
  constructor () {
    this.data = {}
    const files = fs.readdirSync(process.cwd() + '/test/fixtures')
    for (let fileName of files) {
      if (path.extname(fileName).toLowerCase() === '.js') {
        const modelName = path.basename(fileName).split('.')[0].toLowerCase()
        this.data[modelName] = require(process.cwd() + '/test/fixtures/' + fileName)
      } // enf if extname
    } // end for
    
    this.modelNames = Object.keys(this.data)
  }

  /**
   * 按照模型名导入相应的mongoose model,require(<process root>/api/models/mongodb)
   * drop the database and insert all the data from model
   */
  initDb () {
    for (let modelName of this.modelNames) {
      let model = require(process.cwd() + '/api/models/mongodb/' + modelName + '.js')
      model[modelName+'Model'].deleteMany({}, (err) => {
        if (err) return new Error(err.message)
        model[modelName+'Model'].insertMany(this.data[modelName], (err) => {
          if (err) return new Error(err.message)
        })
      })
    }
  }
}

module.exports = express_barrel
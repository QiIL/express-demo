### 快速入门
本Demo基于Express框架开发,利用mongoose操作mongodb数据库,利用sequelize操作关系型数据库,本人只用了postgres数据库

如需进一步了解,参见[mongoose文档](http://mongoosejs.com/docs/guide.html) & [sequelize文档](http://docs.sequelizejs.com/) & [express文档](http://expressjs.com/zh-cn/)

### 环境准备
- 操作系统: macOs, windows, Linux
- 运行环境: 建议选择LTS版本, 最低要求v8

### 本地开发
```bash
$ npm i
$ npm run dev
$ open http://localhost:30001/
```

### 部署
```shell
$ pm2 start pm2_config.json
$ pm2 stop pid
```

### 单元测试
- 测试框架: mocha
- 断言库: should
- 另外: 关于mongodb,test目录下有一个barrel文件,用于在每一次单元测试之前根据model/mongodb下的模型文件,读取/test/fixtures/mongodb下的同名js文件中的数据作为数据库初始化数据.关于postgres并没有写相关模型,因为或许用SQL解决会是更好的方案.

### 相关工具
* [ESLint](http://eslint.cn/docs/rules/)，使用了vue cli推荐规则的其中一个，可根据自己使用情况调整.
* [ES6](http://es6.ruanyifeng.com/)，ES6 语法

### 现有 API

```shell
curl 'http://localhost:30001/api/v1/person' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'User-Agent: curl/7.43.0' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/json, text/plain, */*' \
  --compressed
```

### Todo LIst

* [x] session 存到 redis
* [x] session 共享
* [ ] 登录认证
* [ ] 更多业务场景覆盖
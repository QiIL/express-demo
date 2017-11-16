/**
 * 缓存测试
 */

module.exports = {
  setSession: async (req, res) => {
    try {
      req.session.site = {
        name: 'qill',
        blog: 'qiil.github.io'
      }
      return res.status(200).json({ data: req.session.site })
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  }
}

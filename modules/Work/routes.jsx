module.exports = {
  path: 'work',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Work'))
    })
  }
}

module.exports = {
  path: ':code',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Work'))
    })
  }
}

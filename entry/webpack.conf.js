/*eslint-disable*/
var webpack = require('webpack'); // ESLINT: unused vars
/*eslint-enable*/
var path = require('path');

module.exports = {
  externals: {
    // Make sure we use Meteor package for jQuery, react and react-router
    'jquery': '$',
    'react': 'React',
    'react-router': 'ReactRouter',
    'react-dom': 'ReactDOM',
    'react-addons-transition-group': 'React.addons.TransitionGroup',
    'react-addons-create-fragment': 'React.addons.createFragment',
    'react-addons-pure-render-mixin': 'React.addons.PureRenderMixin',
    'react-addons-update': 'React.addons.update',
    'react-addons-linked-state-mixin': 'React.addons.LinkedStateMixin',
    'react-addons-test-utils': 'React.addons.TestUtils'
    // 'percolate:google-api': 'GoogleApi'
  },
  devServer: {
    // You can change this to your server IP address to access it remotely
    host: 'localhost'
  },
  hotMiddleware: {
    reload: true
  },
  resolve: {
    // set root dur to ../modules, so you can access a module directly
    root: path.join(__dirname, '..', 'modules'),
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss']
  }
};

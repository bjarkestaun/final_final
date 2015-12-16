/*
  This is the entry point. Export a react component here.
*/
import React, { Component } from 'react'
import Presentations from 'db/Presentations'

export default React.createClass({
  getInitialState () {
    return {code: ''}
  },

  componentDidMount () {
    if (this.props.gid) {
      let presentation = Presentations.findOne({gid: this.props.gid})
      if (this.isMounted() && presentation.code) {
        this.setState({code: presentation.code});
      }
    }
  },

  render () {
    return <div>Access code: {this.state.code}</div>
  }
})

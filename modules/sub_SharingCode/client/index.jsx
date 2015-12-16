/*
  This is the entry point. Export a react component here.
*/
import React, { Component } from 'react'
import Presentations from 'db/Presentations'

export default React.createClass({
  mixins: [ReactMeteorData],

  getMeteordata () {
    return {
      presentation: Presentations.findOne({gid: this.props.gid})
    }
  },
  // codeGetter () {
  //   if (this.props.gid) {
  //     let presentation = Presentations.findOne({gid: this.props.gid})
  //     return presentation.code;
  //   }
  // },

  render () {
    return <div>Access code: {this.data.presentation.code}</div>
  }
})

/*
  This is the entry point. Export a react component here.
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as ProjectorActions from './components/ProjectorActions.jsx'
import Slides from 'sub_Slides/client/index'
import Code from 'sub_SharingCode/client/index'
import Presentations from 'db/Presentations'

let Projector = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {Presentation: Presentations.findOne({gid: this.props.params.gid})}
  },

  render: function () {
    return (
        <div>
          { this.data.Presentation ? <div> Hi  <Slides gid={this.props.params.gid} index={this.data.Presentation.index} />
          <Code gid={this.props.params.gid} /> </div> : '' }
        </div>
    );
  }
})

export default Projector

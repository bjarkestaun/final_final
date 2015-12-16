/*
  This is the entry point. Export a react component here.
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as ProjectorActions from './components/ProjectorActions.jsx'
import Slides from 'sub_Slides/client/index'
import Code from 'sub_SharingCode/client/index'
import Presentations from 'db/Presentations'

let Projector = React.createClass({
  getInitialState: function () {
    var self = this
    var query = Presentations.find({gid: this.props.params.gid})
    // var thisPresentation = query.fetch()
    // this.setState({presentation: thisPresentation})
    // console.log(this.state)
    var handle = query.observeChanges({
      changed: function (id, changed) {
        self.props.setIndex(changed.index)
      }
    });
    return {}
  },

  componentDidMount () {
    if (this.props.params.gid) {
      let presentation = Presentations.findOne({gid: this.props.params.gid})
      if (this.isMounted()) {
        /*eslint-disable*/
        this.setState({presentation: presentation});
        console.log('blaba ', this.state)
        /*eslint-enable*/
      }
    }
  },

  render: function () {
    console.log('in render ', this.props.projector.get('presentation'))

    return (
      < div >
        // < getInitialSlides gid={this.props.params.gid} index={this.props.projector.getIn(['presentation', 'index'])}/>
        // < Code gid={this.props.params.gid} />
      </ div >
    );
  }
})

function mapStateToProps (state) {
  return {
    projector: state.projector,
    presentation: state.previews.list.get('presentation')
  }
}

export default connect(mapStateToProps, ProjectorActions)(Projector)

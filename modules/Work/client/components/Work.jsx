import React, { Component } from 'react';

export default class Work extends Component {
  render() {
    return (
      < div >
        Work! {this.context.router.getPath()}
      < /div>
    );
  }
}

import React, { Component } from 'react';

import Waypoint from 'react-waypoint';

export default class WayPointComp extends Component {
  state={
    isInView: false
  }
  onEnter = ({ previousPosition }) => {
    console.log(previousPosition)
    if (previousPosition === Waypoint.below) {
      this.setState({
        isInView: true,
      })
    }
  }
  render() {
    return (
      <Waypoint onEnter={this.onEnter}>
      {this.props.children({isInView: this.state.isInView})}
      </Waypoint>
    )
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class GMap extends Component {
  static propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
  };

  componentDidMount() {
    this.gMap = new google.maps.Map(this.node, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng,
      }
    })
  }

  render() {
    return (
      <div ref={(node) => {this.node = node}}>

      </div>
    );
  }
}

import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { array, object, string } from 'prop-types';
import knightImages from '../assets/characterSprites/defaultKnights/defaultKnights.js';

export default class Character extends Component {
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <Image
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: width,
          height: height,
          transform: [{ scaleX: this.props.face }],
        }}
        source={knightImages[`${this.props.state}${this.props.pose}`]}
      />
    );
  }
}

Character.propTypes = {
  size: array,
  body: object,
  color: string,
};

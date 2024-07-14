import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions, View, Animated, Easing } from 'react-native';
import NativeLinearGradient from 'react-native-linear-gradient';
import rgb2hex from 'rgb2hex';

// const {height, width} = Dimensions.get('window');

class LinearGradient extends Component {
  render() {
    const { color0, color1, children, points } = this.props;
    const gStart = points.start;
    const gEnd = points.end;
    return (
      <NativeLinearGradient
        // colors={this.props.colors.map((c) => rgb2hex(c).hex)}
        colors={[color0, color1].map((c) => rgb2hex(c).hex)}
        start={gStart}
        end={gEnd}
        style={[styles.linearGradient]}>
        {children}
      </NativeLinearGradient>
    )
  }
}
export default LinearGradient

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});
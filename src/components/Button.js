import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import styles from './Button.style';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.onPress}
      >
        <Text
          style={styles.buttonText}
        >
          {this.props.value}
        </Text>
      </TouchableOpacity>
    );
  }
}
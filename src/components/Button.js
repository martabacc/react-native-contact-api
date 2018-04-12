import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

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

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    minWidth: 60,
    alignItems: 'center',
    marginLeft: 4,
    borderRadius: 5,
    backgroundColor: '#ffffff20'
  },
  buttonText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: 'white'
  }
});
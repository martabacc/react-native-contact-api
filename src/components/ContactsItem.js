import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import md5 from 'md5';
import PropTypes from 'prop-types';

/**
 * Showing contact item
 */
export default class ContactItem extends Component {
  render() {
    const {name, email} = this.props;
    return (
      <TouchableOpacity
        style={styles.containerRoot}
      >
        <View
          style={styles.containerImage}
        >
          <Image
            source={{ uri: `https://gravatar.com/avatar/${md5(email)}.png?s=200` }}
            style={styles.contactImage}
          />
        </View>
        <View
          style={styles.containerContact}
        >
          <Text
            style={styles.contactName}
          >
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};


const styles = StyleSheet.create({
  containerRoot: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
  },
  containerContact: {
    flex: 4,
    padding: 8,
    flexDirection: 'column'
  },
  containerImage: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingRight: 8
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
  },
  contactImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  }
});
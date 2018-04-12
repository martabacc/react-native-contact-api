import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import Button from './Button';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      emailL: ''
    };
    this._saveContact = this._saveContact.bind(this);
    this._onChangeName = this._onChangeName.bind(this);
    this._onChangeEmail = this._onChangeEmail.bind(this);
  }

  _onChangeEmail(email) {
    this.setState({ email });
  }

  _onChangeName(name) {
    this.setState({ name });
  }

  _saveContact() {
    const { onSaveContact } = this.props;
    const { name, email } = this.state;
    if (!name || !email) {
      return;
    }
    onSaveContact(name, email);
    this.setState({ name: '', email: '' });
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <TextInput
          style={styles.input}
          placeholder='Name'
          autoCorrection={false}
          value={this.state.name}
          placeholderTextColor='white'
          onChangeText={this._onChangeName}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCorrection={false}
          autoCapitalize='none'
          value={this.state.email}
          placeholderTextColor='white'
          onChangeText={this._onChangeEmail}
        />
        <Button
          onPress={this._saveContact}
          value='Save'
        />
      </View>
    );
  }
}

ContactForm.propTypes = {
  onSaveContact: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    backgroundColor: '#3F3E4F',
  },
  input: {
    flex: 2,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#ffffff20',
    marginLeft: 3,
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 3,
    color: 'white',
  }
});

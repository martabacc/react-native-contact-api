import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import Button from './Button';
import {connect} from 'react-redux';
import styles from './ContactForm.style';
import { addTodo } from '../actions/contacts';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
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
    const {dispatch} = this.props;
    const {name, email} = this.state;
    dispatch(addTodo(name, email));
    this.setState({ name: '', email: '' });
  }

  render() {
    return (
        <View
            style={styles.container}
        >
          <TextInput
              style={styles.input}
              placeholder="Name"
              autoCorrection={false}
              value={this.state.name}
              placeholderTextColor="white"
              onChangeText={this._onChangeName}
          />
          <TextInput
              style={styles.input}
              placeholder="Email"
              autoCorrection={false}
              autoCapitalize="none"
              value={this.state.email}
              placeholderTextColor="white"
              onChangeText={this._onChangeEmail}
          />
          <Button
              onPress={this._saveContact}
              value="Save"
          />
        </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addContact: newContact => {
    dispatch(addTodo(newContact));
  }
});

export default connect()(ContactForm);



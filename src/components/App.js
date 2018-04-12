/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ContactList from './ContactsList';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';
import PropTypes from 'prop-types';
import rootReducers from '../reducers';
import {connect} from 'react-redux';

//create store
const store = createStore(rootReducers);

type Props = {};
class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts,
      filterKeyword: ''
    };
    this.onSaveContact = this.onSaveContact.bind(this);
    this.onFilterContact = this.onFilterContact.bind(this);
  }

  onSaveContact(name, email) {
    this.setState({
      contacts: [{ name, email }, ...this.state.contacts]
    });
  }

  onFilterContact(keyword) {
    this.setState({ filterKeyword: keyword });
  }

  filteredContact() {
    const { contacts, filterKeyword } = this.state;
    const keywordLowerCase = filterKeyword.toLowerCase();
    return contacts.filter((contact) => {
      const contactNameLowerCase = contact.name.toLowerCase();
      return contactNameLowerCase.includes(keywordLowerCase);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ContactFilter onFilterContact={this.onFilterContact}/>
        <ContactList contacts={this.filteredContact()}/>
        <ContactForm onSaveContact={this.onSaveContact}/>
      </View>
    );
  }
}

const contact = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

App.propTypes = {
 contacts: PropTypes.arrayOf(contact)
};

App.defaultProps = {
  contacts: [
    { name: 'Should not be shown', email: 'aaa@aaa.com' },
  ]
};

const mapStateToProps = (state) => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#454353'
  }
});

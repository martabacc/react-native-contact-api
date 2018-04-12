/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './App.style';
import ContactFilter from './ContactFilter';
import ContactForm from './ContactForm';
import ContactList from './ContactsList';

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

const mapStateToProps = (state) => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(App);


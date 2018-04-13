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
      filterKeyword: ''
    };
    this.onFilterContact = this.onFilterContact.bind(this);
  }

  onFilterContact(keyword) {
    this.setState({ filterKeyword: keyword });
  }

  filteredContact() {
    const { filterKeyword } = this.state;
    const { contacts } = this.props;
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
        <ContactForm/>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(App);


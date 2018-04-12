import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import ContactItem from './ContactsItem';

/**
 * Showing list of contacts
 */
export default class ContactsList extends Component {
  _generateTransactionItem({item}) {
    return <ContactItem {...item}/>
  }

  render() {
    const { contacts } = this.props;
    return (
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._generateTransactionItem}
      />
    );
  }
}
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import Button from './Button';
import md5 from 'md5';
import {connect} from 'react-redux';
import styles from './ContactsItem.style';
import {deleteContact} from '../actions/contacts';
import {pingContact} from '../actions/ping';

/**
 * Showing contact item
 */
class ContactItem extends Component {
  constructor(props){
    super(props);
    this.deleteContact = this.deleteContact.bind(this);
    this.pingContact = this.pingContact.bind(this);
  }

  deleteContact(){
    const {name, deleteContact} = this.props;
    return deleteContact(name);
  }

  pingContact(){
    const {pingContact, name} = this.props;
    return pingContact(name);
  }

  render() {
    const {name, email, pinged} = this.props;
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
            {name} Ping Count : {pinged}
          </Text>

          <Button value={'Delete'} onPress={this.deleteContact} />
          <Button value={'Ping'} onPress={this.pingContact} />
        </View>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteContact: name => dispatch(deleteContact(name)),
  pingContact: name => dispatch(pingContact(name))
});

export default connect(null, mapDispatchToProps)(ContactItem);
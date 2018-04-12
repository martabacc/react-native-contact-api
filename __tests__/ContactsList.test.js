import React from 'react';
import { shallow, mount } from 'enzyme';
import { FlatList } from 'react-native';
import ContactsList from '../src/components/ContactsList';
import ContactItem from '../src/components/ContactsItem';

describe('ContactsList', () => {
  it('render flatlist with no item', () => {
    const wrapper = mount(<ContactsList/>);
    expect(wrapper.find(FlatList).length).toBe(1);
  });

  it('render 1 item/row in flatlist', () => {
    const contacts = [{name: 'DP', email: 'hsdpal@gmail.com'}];
    const wrapper = shallow(<ContactsList contacts={contacts}/>);
    const flatList = wrapper.find(FlatList);
    expect(flatList.find(ContactItem).length).toBe(1);
  });

  it('render 1 item/row with name DP', () => {
    const contacts = [{name: 'DP', email: 'hsdpal@gmail.com'}];
    const wrapper = mount(<ContactsList contacts={contacts}/>);
    const flatList = wrapper.find(FlatList);
    const contactItem = flatList.find(ContactItem);
    expect(contactItem.at(0)).to.contain('DP');
  });
});

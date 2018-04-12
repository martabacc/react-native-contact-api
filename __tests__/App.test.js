import React from 'react';
import App from '../src/components/App';
import { shallow } from 'enzyme';
import ContactForm from '../src/components/ContactForm';
import ContactFilter from '../src/components/ContactFilter';
import ContactsList from '../src/components/ContactsList';
import Button from '../src/components/Button';


describe('App', () => {
  describe('render', () => {
    it('render children ContactForm, ContactFilter, and ContactsList', () => {
      const wrapper = shallow(<App/>);
      const contactForm = wrapper.find(ContactForm);
      const contactFilter = wrapper.find(ContactFilter);
      const contactList = wrapper.find(ContactsList);
      expect(contactForm.length).toBe(1);
      expect(contactFilter.length).toBe(1);
      expect(contactList.length).toBe(1);
    });
  });

  describe('#onSaveContact', () => {
    it('add contact to state.contacts when function invoked', () => {
      const wrapper = shallow(<App contacts={[]}/>);
      expect(wrapper.state().contacts.length).toBe(0);
      wrapper.instance().onSaveContact('Dewa', 'awidiya.dewa@gmail.com');
      wrapper.instance().onSaveContact('Dewa', 'awidiya.dewa@gmail.com');
      expect(wrapper.state().contacts.length).toEqual(2);
    });

    it('add contact to state.contacts when function invoked', () => {
      const wrapper = shallow(<App contacts={[]}/>);
      wrapper.instance().onSaveContact('Dewa', 'awidiya.dewa@gmail.com');
      expect(wrapper.state().contacts).toEqual([{name: 'Dewa', email: 'awidiya.dewa@gmail.com'}]);
    });

    it('integration test with child ContactForm when save button clicked will change parent state', () => {
      const wrapperParent = shallow(<App contacts={[]}/>);
      const wrapperChild = wrapperParent.find(ContactForm).shallow();
      expect(wrapperParent.state().contacts.length).toBe(0);
      const buttonSave = wrapperChild.find(Button);
      const contactInput = { name: 'Dewa', email: 'awidiya.dewa@gmail.com' };
      wrapperChild.setState(contactInput);
      buttonSave.props().onPress();
      expect(wrapperParent.state().contacts.length).toBe(1);
      expect(wrapperParent.state().contacts).toEqual([contactInput]);
    });
  });

  describe('#onFilterContact', () => {
    it('change state.filterKeyword when onFilterKeyword invoked', () => {
      const wrapper = shallow(<App contacts={[]}/>);
      wrapper.instance().onFilterContact('');
      expect(wrapper.state().filterKeyword).toEqual('');
    });

    it('change state.filterKeyword when onFilterKeyword invoked', () => {
      const wrapper = shallow(<App contacts={[]}/>);
      wrapper.instance().onFilterContact('Dew');
      expect(wrapper.state().filterKeyword).toEqual('Dew');
    });
  });

  describe('#filteredContact', () => {
    it('return 0 contact when keyword not matching any contact', () => {
      const contacts = [{ name: 'Dewa', email: 'awidiya.dewa@gmail.com' }];
      const wrapper = shallow(<App contacts={contacts}/>);
      wrapper.setState({ filterKeyword: 'john doe' });
      const filteredContact = wrapper.instance().filteredContact();
      expect(filteredContact.length).toBe(0);
    });

    it('return 1 contact when keyword not matching any contact', () => {
      const contacts = [{ name: 'Dewa', email: 'awidiya.dewa@gmail.com' }];
      const wrapper = shallow(<App contacts={contacts}/>);
      wrapper.setState({ filterKeyword: 'dew' });
      const filteredContact = wrapper.instance().filteredContact();
      expect(filteredContact.length).toBe(1);
      expect(filteredContact).toEqual(contacts);
    });

    it('return 1 contact when keyword not matching any contact', () => {
      const contacts = [
        { name: 'Dewa', email: 'awidiya.dewa@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'John Cena', email: 'cena@gmail.com' },
      ];
      const wrapper = shallow(<App contacts={contacts}/>);
      wrapper.setState({ filterKeyword: 'john' });
      const filteredContact = wrapper.instance().filteredContact();
      const expectedFilteredContact = [
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'John Cena', email: 'cena@gmail.com' }
      ];
      expect(filteredContact.length).toBe(2);
      expect(filteredContact).toEqual(expect.arrayContaining(expectedFilteredContact));
    });
  });
});

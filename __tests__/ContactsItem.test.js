import React from 'react';
import { shallow } from 'enzyme';
import {
  Text,
  Image
} from 'react-native';
import ContactItem from '../src/components/ContactsItem';
import md5 from 'md5';

describe('ContactItem', () => {
  describe('render', () => {
    it('render Image and Text component', () => {
      const wrapper = shallow(<ContactItem name='Dewa' email='awidiya.dewa@gmail.com'/>);
      const image = wrapper.find(Image);
      const textName = wrapper.find(Text);
      expect(image.length).toBe(1);
      expect(textName.length).toBe(1);
    });

    it('render Image and Text component with the correct data', () => {
      const email = 'awidiya.dewa@gmail.com';
      const wrapper = shallow(<ContactItem name='Dewa' email={email}/>);
      const image = wrapper.find(Image);
      const textName = wrapper.find(Text).shallow();
      const gravatarUri = `https://gravatar.com/avatar/${md5(email)}.png?s=200`;
      expect(image.props().source.uri).toBe(gravatarUri);
      expect(textName.text()).toBe('Dewa');
    });
  });
});
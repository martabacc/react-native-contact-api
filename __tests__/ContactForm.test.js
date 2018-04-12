import React from 'react';
import ContactForm from '../src/components/ContactForm';
import { shallow } from 'enzyme';
import { TextInput } from 'react-native';
import Button from '../src/components/Button';

describe('ContactForm', () => {
  describe('render', () => {
    it('render two TextInput and one Button', () => {
      const wrapper = shallow(<ContactForm/>);
      const textInputs = wrapper.find(TextInput);
      const button = wrapper.find(Button);
      expect(textInputs.length).toBe(2);
      expect(button.length).toBe(1);
    });

    it('render TextInput with placeholder \'Name\' and \'Email\' and button with text SAVE', () => {
      const wrapper = shallow(<ContactForm/>);
      const textInputs = wrapper.find(TextInput);
      const buttonSave = wrapper.find(Button);
      expect(textInputs.at(0).find("[placeholder='Name']").length).toBe(1);
      expect(textInputs.at(1).find("[placeholder='Email']").length).toBe(1);
      expect(buttonSave.find("[value='Save']").length).toBe(1);
    });

    it('change state.name when event onChange occur in Name TextInput', () => {
      const wrapper = shallow(<ContactForm/>);
      const textInputs = wrapper.find(TextInput);
      const nameInput = textInputs.find("[placeholder='Name']");
      nameInput.props().onChangeText('Dewa');
      expect(wrapper.state().name).toBe('Dewa');
    });

    it('change state.email when event onChange occur in Email TextInput', () => {
      const wrapper = shallow(<ContactForm/>);
      const textInputs = wrapper.find(TextInput);
      const emailInput = textInputs.find("[placeholder='Email']");
      emailInput.props().onChangeText('awidiya.dewa@gmail.com');
      expect(wrapper.state().email).toBe('awidiya.dewa@gmail.com');
    });

    it('invoke method props.onSaveContact when button save pressed', () => {
      const mockOnSaveContact = jest.fn();
      const wrapper = shallow(<ContactForm onSaveContact={mockOnSaveContact}/>);
      const buttonSave = wrapper.find(Button);
      wrapper.setState({
        name: 'Dewa',
        email: 'awidiya.dewa@gmail.com'
      });
      buttonSave.props().onPress();
      expect(mockOnSaveContact).toBeCalledOnce;
      expect(mockOnSaveContact).toBeCalledWith('Dewa', 'awidiya.dewa@gmail.com');
    });
  });
});

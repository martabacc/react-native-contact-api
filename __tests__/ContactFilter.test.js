import React from 'react';
import { shallow } from 'enzyme';
import ContactFilter from '../src/components/ContactFilter';
import Button from '../src/components/Button';


describe('ContactFilter', () => {
  describe('render', () => {
    it('render TextInput and Search button', () => {
      const wrapper = shallow(<ContactFilter/>);
      const inputKeyword = wrapper.find('TextInput');
      const btnSearch = wrapper.find('Button');
      expect(inputKeyword.length).toBe(1);
      expect(btnSearch.length).toBe(1);
    });
  });

  describe('#onChangeKeyword', () => {
    it('change state.keyword to Dewa when input on TextInput changed to Dewa', () => {
      const wrapper = shallow(<ContactFilter/>);
      const inputKeyword = wrapper.find('TextInput');
      inputKeyword.props().onChangeText('Dewa');
      expect(wrapper.state().keyword).toBe('Dewa');
    });

    it('change state.keyword to DP when input on TextInput changed to DP', () => {
      const wrapper = shallow(<ContactFilter/>);
      const inputKeyword = wrapper.find('TextInput');
      inputKeyword.props().onChangeText('DP');
      expect(wrapper.state().keyword).toBe('DP');
    });
  });

  describe('#onFilterContact', () => {
    it('invoke parent/props function and send keyword on parameter', () => {
      const mockOnFilterContact = jest.fn();
      const wrapper = shallow(<ContactFilter onFilterContact={mockOnFilterContact}/>);
      const btnFilter = wrapper.find('Button');
      wrapper.setState({ keyword: 'Dewa' });
      btnFilter.props().onPress();
      expect(mockOnFilterContact).toBeCalledOnce;
      expect(mockOnFilterContact).toBeCalledWith('Dewa');
    });
  });
});
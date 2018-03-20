import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  // enzyme example
  //expect(wrapper.find('h1').text()).toBe('Expensify');

  // shallow renderer example
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // const output = renderer.getRenderOutput();
  // expect(output).toMatchSnapshot();

});
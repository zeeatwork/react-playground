import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Accordian from './state-drills/Accordian';

describe(`Accordian Component`, () => {
  const data = [ 
    { title: 'Section 1', 
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', }, 
    { title: 'Section 2', 
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!', }, 
    { title: 'Section 3', 
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?', }, 
  ]
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian sections={data}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  
  it ("Component renders no sections as active by default", () => {
    const tree = renderer.create(<Accordian sections={data}/>).toJSON();
    expect (tree).toMatchSnapshot();
  }
  
  )
  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Accordian />)
    toJson(wrapper)
  })
  
  it('renders empty given no tabs', () => { const wrapper = shallow(<Accordian />);
     expect(toJson(wrapper)).toMatchSnapshot() })
  
     it('closes the first tab and opens any clicked tab', () => {
      const wrapper = shallow(<Accordian sections={data} />)
      wrapper.find('button').at(1).simulate('click')
      expect(toJson(wrapper)).toMatchSnapshot()
    })
})

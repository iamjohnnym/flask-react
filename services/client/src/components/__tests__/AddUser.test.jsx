import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AddUser from '../AddUser';


test('AddUser renders properly', () => {
    const wrapper = shallow(<AddUser/>);
    const element = wrapper.find('form');
    expect(element.find('input').length).toBe(3);
    expect(element.find('input').get(0).props.name).toBe('username');
    expect(element.find('input').get(1).props.name).toBe('email');
    expect(element.find('input').get(2).props.type).toBe('submit');
});

test('AddUser calls component can mount', () => {
    const addUser = jest.fn();
    const wrapper = shallow(<AddUser addUser={addUser}/>);
    const element = wrapper.find('form');
    expect(element.find('input').length).toBe(3);
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    element.find('form').simulate('submit', fakeEvent);
    expect(addUser).toBeCalledWith(fakeEvent);
});

test('AddUser renders a snapshot', () => {
    const tree = renderer.create(<AddUser/>).toJSON();
    expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import UsersList from '../UsersList';

const users = [
    {
        'id': 1,
        'active': true,
        'username': 'iamjohnnym',
        'email': 'johnny@iamjohnnym.com'
    }
];

test('UsersList renders properly', () => {
    const wrapper = shallow(<UsersList users={users}/>);
    const element = wrapper.find('h4');
    expect(element.length).toBe(1);
    expect(element.get(0).props.children).toBe('iamjohnnym');
});

test('UsersList renders a snapshot properly', () => {
    const tree = renderer.create(<UsersList users={users}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

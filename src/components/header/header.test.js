import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer';

describe('<Header/> testing', () => {
    it('<Header/> have rendered correctly', () => {
        const header = renderer.create(<Header/>).toJSON();
        expect(header).toMatchSnapshot();
    })
})
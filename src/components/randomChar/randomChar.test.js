
import * as React from 'react';
// import {render,screen} from '@testing-library/react';
import renderer from 'react-test-renderer';

import RandomChar from './randomChar';

//JEST
describe('Testing<RandomChar/>', () => {
    it ('RandomChar have rendered correctly', () => {
        const char = renderer.create(<RandomChar/>).toJSON(); 
        expect(char).toMatchSnapshot();
    })
})

// it('RandomChar have rendered correctly', () => {
//     const component = renderer.create(<RandomChar/>);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// })


//@testing-library/react

// describe('RandomChar', () => {
//     it('RandomChar have rendered correctly', () => {
//         render(<RandomChar/>);

//         // expect(screen.queryByText('momondo')).toBeNull();
        
//     })
// });
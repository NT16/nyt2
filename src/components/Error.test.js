import React from 'react';
import renderer from 'react-test-renderer';
import Error from './Error';

describe('Error component', ()=>{

    const message = 'Failed to fetch';

    it('renders all properties', () => {
        const component = renderer.create( <Error message={message} /> );
        
        expect(component.root.findByType('div').props.children).toEqual(message);
    })
})
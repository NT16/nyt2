import React from 'react';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import List from './List';

let list = [
  {
    display_name : 'Fiction',
    list_name_encoded: 'fiction'
}, 
{
    display_name : 'Non-fiction',
    list_name_encoded: 'nonfiction'
}
];

describe('List', () => {  
    test('clicking the category button calls the callback handler', () => {
      const onClick = jest.fn();
  
      render(<List list={list} onClick={onClick} />);
       
      fireEvent.click(screen.getByText('Fiction'));
  
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenCalledWith('fiction');
    });
  });
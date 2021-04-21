import React from 'react';
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {

  test('renders all properties', () => {
    const mocks = jest.fn();

    render(<Navbar getPrevious={mocks}
      getNext={mocks}
      showList={mocks}
      previous='Fiction'
      next='Manga' />);

    expect(screen.getByText('Fiction')).toBeInTheDocument();
    expect(screen.getByText('Manga')).toBeInTheDocument();

    //renders 3 clickable navigational buttons
    expect(screen.getAllByRole('button').length).toBe(3);
  });

  test('disables previous button for index 0', () => {
    const mocks = jest.fn();

    render(<Navbar getPrevious={mocks}
      getNext={mocks}
      showList={mocks}
      previous=''
      next='Manga' />);

    expect(screen.getByText('Manga')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeDisabled();
  });

  test('clicking home button calls the callback handler', () => {
    const mocks = jest.fn();
    const showList = jest.fn();

    render(<Navbar getPrevious={mocks}
      getNext={mocks}
      showList={showList}
      previous='Fiction'
      next='Manga' />);

    fireEvent.click(screen.getByText('Home'));

    expect(showList).toHaveBeenCalledTimes(1);
  });

});
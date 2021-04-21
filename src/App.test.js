import { fireEvent, render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

let list = [
  {
    display_name: 'Fiction',
    list_name_encoded: 'fiction'
  },
  {
    display_name: 'Non-fiction',
    list_name_encoded: 'nonfiction'
  },
  {
    display_name: 'Hardcover',
    list_name_encoded: 'hardcover'
  },
  {
    display_name: 'Business',
    list_name_encoded: 'business'
  }
];

let books = [
  {
    rank: 1,
    title: 'Becoming',
    book_image: '',
    author: 'Michelle Obama',
    publisher: 'xyz',
    description: 'description',
    weeks_on_list: 23
  }
];

describe('App', () => {
  test('succeeds fetching list on initial render of App', async () => {
    render(<App />);

    expect(screen.queryByText(/Loading/)).toBeInTheDocument();

    await act(() => fetch('/api/nyt/lists'));

    expect(await screen.queryByText(/Loading/)).toBeNull();
    expect(screen.getByText('Fiction')).toBeInTheDocument();
    expect(screen.getByText('Non-fiction')).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();

  });

  test('fails fetching list', async () => {
    const url = '/api/nyt/lists';
    const promise = Promise.reject({ message: 'some error occurred' });

    window.fetch.mockImplementationOnce(url => promise);

    render(<App />);

    expect(screen.queryByText(/Loading/)).toBeInTheDocument();

    try {
      await act(() => fetch(url));
    } catch (error) {
      expect(screen.queryByText(/Loading/)).toBeNull();
      expect(screen.queryByText(/some error occurred/)).toBeInTheDocument();
    }
  });
});

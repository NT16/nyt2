import React from 'react';
import {
  render,
  screen
} from '@testing-library/react';
import BookDetails from './BookDetails';

let book = {
  rank: 1,
  title: 'Becoming',
  book_image: '',
  author: 'Michelle Obama',
  publisher: 'xyz',
  description: 'description',
  weeks_on_list: 23
};

describe('BookDetails', () => {
  test('renders all properties', () => {
    render(<BookDetails book={book} />);

    expect(screen.getByText('Michelle Obama')).toBeInTheDocument();
    expect(screen.getByText('23 weeks on the list')).toBeInTheDocument();
  });
});
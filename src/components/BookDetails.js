import React from 'react'
import Card from 'react-bootstrap/Card';

const BookDetails = ({ book }) => {
  return <Card>
    <Card.Header>{book.rank}. {book.title}</Card.Header>
    <Card.Img variant="top" src={book.book_image} />
    <Card.Body>
      <Card.Title><span className="text-muted">Author : </span>{book.author}</Card.Title>
      <Card.Subtitle><span className="text-muted">Publisher : </span>{book.publisher}</Card.Subtitle>
      <Card.Text className='description'>
        {book.description}
      </Card.Text>
    </Card.Body>
    {
      book.weeks_on_list !== 0 &&
      <Card.Footer>
        <small className="text-muted">{book.weeks_on_list} {book.weeks_on_list === 1 ? 'week' : 'weeks'} on the list</small>
      </Card.Footer>
    }
  </Card>
}

export default BookDetails;
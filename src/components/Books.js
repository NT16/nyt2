import CardColumns from 'react-bootstrap/CardColumns'
import BookDetails from './BookDetails';

const Books = ({ books}) => {
    return (
      <div>
        <h2 className='category-title'>{books.list_name}</h2>
        
        <CardColumns className='books-column'>
        {
          books.books.map(book => <BookDetails key={book.title} book = {book} />)
        }
        </CardColumns> 
      </div>
    );
}

export default Books;
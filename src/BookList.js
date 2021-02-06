import React from 'react';
import Book from './Book';

const BookList = (props) => {
  const listItems = props.books.map(book => (
    <Book key={book.id} bookDetails={book} />
  ));

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {listItems}
      </ol>
    </div>
  )
}

export default BookList;

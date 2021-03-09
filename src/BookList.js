import React from 'react';
import Book from './common/Book';

const BookList = (props) => {
  console.log("Books are :", props.books);
  let listItems = [];
  if (Array.isArray(props.books)) {
    listItems = props.books?.map(book => (
      <Book 
        key={book.id} 
        bookDetails={book} 
        handleBookShelfUpdate={props.handleBookShelfUpdate} 
      />
    ));  
  } else {
    console.log(props.books.error);
  }
  
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {listItems}
      </ol>
    </div>
  )
}

export default BookList;

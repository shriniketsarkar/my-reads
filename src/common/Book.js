import React from 'react';
import ShelfSelector from './ShelfSelector';

const Book = props => {
  return (
    <div className="book">
      <div className="book-top">
        <img
          className="book-cover-img"
          src={props?.bookDetails?.imageLinks?.thumbnail}
          alt="Book cover thumbnail"
        />
        <ShelfSelector
          book={props.bookDetails}
          handleBookShelfUpdate={props.handleBookShelfUpdate}
        />
      </div>
      <div className="book-title">{props?.bookDetails?.title}</div>
      <div className="book-authors">{props?.bookDetails?.authors?.join(',  ')}</div>
    </div>
  );
};

export default Book;

import React from 'react';
import BookList from './BookList';

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <BookList
        books={props.books}
        handleBookShelfUpdate={props.handleBookShelfUpdate}
      />
    </div>
  );
};

export default BookShelf;

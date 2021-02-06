import React, { useState, useEffect } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

const Bookcase = () => {
  const [wantToReadBooks, setWantToReadBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then(books => {
        let readBooks = [], currentlyReadingBooks = [], wantToReadBooks = [];
        books.map(book => {
          switch (book.shelf) {
            case 'read':
              readBooks.push(book);
              break;
            case 'currentlyReading':
              currentlyReadingBooks.push(book);
              break;
            default:
            // This will handle the case if a new shelf is introduced and will
            // show those books in the Want to Read shelf.
              wantToReadBooks.push(book);
          }
        });
        setReadBooks(readBooks);
        setCurrentlyReadingBooks(currentlyReadingBooks);
        setWantToReadBooks(wantToReadBooks);
      })
  }, []);

  return (
    <div className="list-books-content">
      <div>
        <BookShelf
          shelfTitle={'Currently Reading'}
          books={currentlyReadingBooks}
        />
        <BookShelf
          shelfTitle={'Want to Read'}
          books={wantToReadBooks}
        />
        <BookShelf
          shelfTitle={'Read'}
          books={readBooks}
        />
      </div>
    </div>
  )
}

export default Bookcase;

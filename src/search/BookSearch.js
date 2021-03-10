import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import BookList from '../main-page/BookList';
import * as BooksAPI from '../services/BooksAPI';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [myBooks, setMyBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const prevQueryRef = useRef('');
  const inputElementRef = useRef(null);

  // This will be executed only once when the search loads
  useEffect(() => {
    inputElementRef.current.focus();
    // Get the list of current books on shelf to mark search results
    // with "shelf" field if they are on the shelf.
    BooksAPI.getAll().then(books => setMyBooks(books));
  }, []);

  // This side effect will be executed whenever query is updated
  useEffect(() => {
    if (!query) {
      setSearchedBooks([]);
    } else if (prevQueryRef.current !== query) {
      // Run the search only if query is different than the last run query.
      BooksAPI.search(query)
        .then(books => {
          let updateBooks = [];
          if (Array.isArray(books)) {
            updateBooks = books.map(book => {
              // Add shelf to every book if its in myBooks
              const shelvedBook = myBooks.find(b => b.id === book.id);
              if (shelvedBook) {
                book.shelf = shelvedBook.shelf;
              }
              return book;
            });
          }
          setSearchedBooks(updateBooks);
        })
    }
    prevQueryRef.current = query;
  }, [query, myBooks]);

  const handleBookShelfUpdate = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then((res) => {
        if (res?.error) {
          alert("Book shelf update failed. Please try again.");
        }
      });
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/'>
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            ref={inputElementRef}
            placeholder="Search by title or author"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        {query.length ?
          <BookList
            books={searchedBooks}
            handleBookShelfUpdate={handleBookShelfUpdate}
          />
          : <div className="search-div-default-text">
            Please enter a search query
          </div>}
      </div>
    </div>
  )
}

export default BookSearch;

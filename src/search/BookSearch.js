import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

import BookList from '../BookList';
import * as BooksAPI from '../services/BooksAPI';

const BookSearch = () => {

  const [query, setQuery] = useState('');
  const [myBooks, setMyBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const prevQueryRef = useRef('');

  // This will be executed only once when the search loads
  useEffect(() => {
    // Get the list of current books on shelf to mark search results
    // with "shelf" field if they are on the shelf.
    BooksAPI.getAll().then(books => setMyBooks(books));
  }, []);

  // This side effect will be executed whenever query is updated
  useEffect(() => {
    if (!query) {
      setSearchedBooks([]);
    } else if (prevQueryRef.current !== query) {
      BooksAPI.search(query)
      .then(books => {
        let updateBooks = [];
        if (Array.isArray(books)) {
          updateBooks = books.map(book => {
            // add shelf to every book if its in myBooks
            const shelvedBook = myBooks.find(b => b.id === book.id);
            if (shelvedBook) {
              book.shelf = shelvedBook.shelf;
            }
            return book;
          });
        }
        setSearchedBooks(updateBooks);
      })
      .catch(function() {
      });
    }
    prevQueryRef.current = query;    
  }, [query, myBooks]);

  const handleBookShelfUpdate = (book, newShelf) => {
    BooksAPI.update(book, newShelf);

    // TODO: Handle if the Books update api fails here by showing a flash message.
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/'>
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input 
            type="text" 
            placeholder="Search by title or author"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />

        </div>
      </div>
      <div className="search-books-results">
        <BookList
          books={searchedBooks}
          handleBookShelfUpdate={handleBookShelfUpdate}
        />
      </div>
    </div>
  )
}

export default BookSearch;

import React, { useState, useEffect } from 'react';

import BookShelf from './BookShelf';
import * as BooksAPI from '../services/BooksAPI';

const Bookcase = () => {
  const [shelves, setShelves] = useState({});

  // Get all the books on the shelves
  useEffect(() => {
    BooksAPI.getAll()
      .then(books => {
        let shelves = {};
        books.forEach(book => {
          if (shelves[book.shelf]) {
            shelves[book.shelf].push(book);
          } else {
            shelves[book.shelf] = [book];
          }
        });
        setShelves(shelves);
      })
  }, []);

  const handleBookShelfUpdate = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then((res) => {
        if (res?.error) {
          alert("Book shelf update failed. Please try again.");
        }
      });

    const oldShelf = book.shelf;
    let oldShelfItems = shelves[oldShelf].filter(oldBook => oldBook.id !== book.id);
    let newShelves = {};

    // Add book to new shelf only if the shelf exists.
    if (newShelf !== 'none') {
      book.shelf = newShelf;
      let newShelfItems = [...shelves[newShelf]];
      newShelfItems.push(book);
      newShelves = {
        ...shelves,
        [newShelf]: newShelfItems,
        [oldShelf]: oldShelfItems
      };
    } else {
      newShelves = {
        ...shelves,
        [oldShelf]: oldShelfItems
      };
    }
    setShelves(newShelves);
  }

  const shelfItems = Object.keys(shelves).map(shelfKey => {
    let title = '';
    switch (shelfKey) {
      case 'currentlyReading':
        title = 'Currently Reading';
        break;
      case 'wantToRead':
        title = 'Want to Read'
        break;
      case 'read':
        title = 'Read Books'
        break;
      default:
        title = 'To be Shelved'
    }
    return <BookShelf
      key={shelfKey}
      shelfTitle={title}
      books={shelves[shelfKey]}
      handleBookShelfUpdate={handleBookShelfUpdate}
    />
  });

  return (
    <div className="list-books-content">
      <div>
        {shelfItems}
      </div>
    </div>
  )
}

export default Bookcase;

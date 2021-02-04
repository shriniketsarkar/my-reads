import React, { Component } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

class Bookcase extends Component {
  state = {
    wantToReadBooks: [],
    readBooks: [],
    currentlyReadingBooks: []
  }

  componentDidMount() {
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
        this.setState({readBooks, currentlyReadingBooks, wantToReadBooks});
      })
  }

  render() {
    return (
      <div className="list-books-content">
        <div>
          <BookShelf
            shelfTitle={'Currently Reading'}
            books={this.state.currentlyReadingBooks}
          />
          <BookShelf
            shelfTitle={'Want to Read'}
            books={this.state.wantToReadBooks}
          />
          <BookShelf
            shelfTitle={'Read'}
            books={this.state.readBooks}
          />
        </div>
      </div>
    )
  }
}

export default Bookcase;

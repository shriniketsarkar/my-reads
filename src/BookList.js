import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {
  render() {
    const listItems = this.props.books.map(book => (
      <Book
        imgUrl={book.imageLinks.thumbnail}
        title={book.title}
        authors={book.authors}
        shelf={book.shelf}
      />
    ));
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {listItems}
        </ol>
      </div>
    )
  }
}

export default BookList;

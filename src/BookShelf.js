import React, { Component } from 'react';
import BookList from './BookList';

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <BookList books={this.props.books} />
      </div>
    )
  }
}

export default BookShelf;

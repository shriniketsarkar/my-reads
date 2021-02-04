import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import BookSearch from './BookSearch';
import Bookcase from './Bookcase';
import './App.css';

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Bookcase />
            <div className="open-search">
              <Link to='/search'>
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )} />
        <Route path='/search' component={BookSearch} />
      </div>
    )
  }
}

export default BooksApp;

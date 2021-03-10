import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import BookSearch from './search/BookSearch';
import Bookcase from './main-page/Bookcase';
import './App.css';

const BooksApp = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default BooksApp;

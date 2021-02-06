import React, { useState } from 'react';

const Book = props => {
  const [shelf, setShelf] = useState(props.bookDetails.shelf);
  const onSelectionChange = e => {
    setShelf(e.target.value);
  }

  return (
    <div className="book">
      <div className="book-top">
        <img
          className="book-cover-img"
          src={props.bookDetails.imageLinks.thumbnail}
          alt="Book cover thumbnail"
        />
        <div className="book-shelf-changer">
          <select value={shelf} onChange={onSelectionChange}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.bookDetails.title}</div>
      <div className="book-authors">{props.bookDetails.authors.join(',  ')}</div>
    </div>
  )
}

export default Book;

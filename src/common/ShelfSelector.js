import React, { useState, useEffect } from 'react';

const ShelfSelector = (props) => {
  const [shelf, setShelf] = useState(props.book.shelf);
  const onSelectionChange = e => {
    setShelf(e.target.value);
    props.handleBookShelfUpdate(props.book, e.target.value);
  };

  useEffect(() => {
    if (!shelf) {
      setShelf('none');
    }
  },[shelf]);

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={onSelectionChange}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfSelector;

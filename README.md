# MyReads

MyReads is a website which allows the user to sort their books based on shelves. The site allows the user to sort books in 3 shelves i.e Currently Reading, Want to Read and Read Books.
These 3 shelves display the books with information about the books title and authors.

The site provides for an easy way to organize books in these shelves using a Book Shelf selector mechanism. This sorts the books and retains their position by updating a central database which can be accessed using the BooksAPI. This allows the user to retain their organization even if the site is refreshed. 

## Installation and Launch Instructions
To get started developing right away:

* Install all project dependencies with `npm install`
* Start the development server with `npm start`
* Visit `localhost:3000` on web-browser of your choice.

## Project Structure for better understanding
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file used to build and run the application.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html
└── src
    ├── App.css # Styles for your app.
    ├── App.js # This is the root of the MyReads app.
    ├── App.test.js # Used for testing.
    ├── common # Group of files which are commonly used in different pages.
    │   ├── Book.js # Renders the book thumbnail, description.
    │   ├── ShelfSelector.js #Functionality allowing for shelf selection.
    ├── icons # Helpful images for your app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg    
    ├── main-page # Folder to group all My Reads main page items.
    │   ├── Bookcase.js # Renders different shelves with books and handles book shelf updates.
    │   ├── BookList.js # Renders a list of books withing a shelf.
    │   └── BookShelf.js # Renders the book list.
    ├── search # Folder to group all My Reads search page items.
    │   ├── BookSearch.js # Handles search and updating of book on shelves.
    ├── services # Folder to group all application services
    │   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── index.css # Global styles.
    └── index.js # Main render point for our application. Wraps the app with BrowserRouter for easier navigation withing the application.
```

## Backend Server

The provided file [`BooksAPI.js`](src/services/BooksAPI.js) contains the methods for performing necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only.

import addBook from './addBookUI.js';

const title = document.querySelector('#title');
const author = document.querySelector('#author');

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add(myLibrary) {
    myLibrary.push(this);
    addBook(this, title.value, author.value);
    localStorage.setItem('books', JSON.stringify(myLibrary));
  }

  remove(myLibrary) {
    myLibrary = myLibrary.filter((element) => element !== this);
    localStorage.setItem('books', JSON.stringify(myLibrary));
  }
}

export default Books;
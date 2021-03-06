import {
  myLibrary,
  addBook,
} from './modules/addBookUI.js';
import Books from './modules/books.js';
import { toggleTabs } from './modules/toggleTabs.js';
import showCurrentTime from './modules/currentTime.js';

const addBtn = document.querySelector('.add');
let storage = [];

storage = JSON.parse(localStorage.getItem('books')) || [];

showCurrentTime();
toggleTabs();

storage.forEach((item) => {
  const book = new Books();
  book.title = item.title;
  book.author = item.author;
  myLibrary.push(book);
  addBook(book, book.title, book.author);
});

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Books();
  book.add(myLibrary);
});

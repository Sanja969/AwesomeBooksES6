import { myLibrary } from '../index.js';
import colorCards from './colorCards.js';
import { 
  toggle,
  booksLibrary, 
  form, 
  contact 
} from './toggleTabs.js';

const booksTable = document.querySelector('#booksTable');

const addBook = (book, title, author) => {
  book.title = title;
  book.author = author;

  const bookLabel = document.createElement('article');
  const bookText = document.createElement('h4');
  const deleteButton = document.createElement('button');

  bookLabel.classList.add('bookLabel');
  bookText.classList.add('bookText');
  deleteButton.classList.add('delete', 'btn', 'btn-danger');

  booksTable.appendChild(bookLabel);
  bookLabel.appendChild(bookText);
  bookLabel.appendChild(deleteButton);

  bookText.textContent = `"${title}" by ${author}`;
  deleteButton.textContent = 'Delete';

  colorCards();
  toggle(booksLibrary, form, contact);

  deleteButton.addEventListener('click', (event) => {
    event.target.parentNode.remove();
    book.remove(myLibrary);
    colorCards();
  });
};

export default addBook;
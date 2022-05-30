const booksLibrary = document.querySelector('#booksLibrary');
const form = document.querySelector('#newBook');
const contact = document.querySelector('#contact');

const toggleTabs = () => {
  const listTab = document.querySelector('.list');
  const addNewTab = document.querySelector('.addNew');
  const contactTab = document.querySelector('.contact');

  listTab.addEventListener('click', () => {
    toggle(booksLibrary, form, contact);
  });
  
  addNewTab.addEventListener('click', () => {
    toggle(form, booksLibrary, contact);
  });
  
  contactTab.addEventListener('click', () => {
    toggle(contact, booksLibrary, form);
  });
}

const toggle = (show, hide1, hide2) => {
  show.style.display = 'flex';
  hide1.style.display = 'none';
  hide2.style.display = 'none';
}

export {toggleTabs, toggle, booksLibrary, form, contact}
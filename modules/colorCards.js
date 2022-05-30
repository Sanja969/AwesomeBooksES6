const colorCards = () => {
  const bookCards = booksTable.childNodes;
  for (let i = 0; i < bookCards.length; i += 1) {
    if (i % 2 !== 0) {
      bookCards[i].style.background = 'rgba(94, 87, 87, 0.671)';
    }
  }
}
export { colorCards }
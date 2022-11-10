function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id) 
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  
books.forEach((book) => book.borrows.forEach((borrowed) => (account.id === borrowed.id) && counter++));
  
  return counter
}

function getBooksPossessedByAccount(accounts, books, authors) {
let booksPossessed = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === accounts.id);
  
  return booksPossessed.map((detail) => ({...detail, author: authors.find((author) => author.id === detail.authorId)
}));
  
  

}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

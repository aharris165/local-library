function findAuthorById(authors, id) {
    return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) 
{
  const borrowedBooks = books.filter((book) => book.borrows[0].returned)

const notReturned = books.filter((book) => !book.borrows[0].returned)

return [notReturned, borrowedBooks]
}

function getBorrowersForBook(book, accounts) {
  let borrowList = [];
  book.borrows.forEach((borrow) => accounts.forEach((account) => {if(account.id === borrow.id) {account.returned = borrow.returned; 
  borrowList.push(account)
                                                                                               }                                                                                               
}));
return borrowList.splice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

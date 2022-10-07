const BookStorage = require("./bookStorage");
const books = require("./books.json");

const bookStorage = new BookStorage(books);

console.log("has info", bookStorage.has_Info("Rebellion of Sophie Q. Lister")); // true
console.log("has info", bookStorage.has_Info(5)); // false
console.log("has info", bookStorage.has_Info(2)); // true
// console.log(
//   "total price",
//   bookStorage.get_total_price_of_books_by_author("Zoe Jones")
// );
// console.log("book found", bookStorage.get_All_books_By_author());
// console.log("book found", bookStorage.get_a_book_matching_bookNumber(40));
// console.log("book info", bookStorage.get_info(3));

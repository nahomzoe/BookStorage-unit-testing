"use strict";

const books = require("../books.json");
const BookStorage = require("../bookStorage.js");
///////////////////////////////////////////

describe("Testing constructor", (jsondata) => {
  test("Test that the missing parameter throws an exception", () => {
    expect(() => new BookStorage()).toThrow("data storage missing");
  });
});

/////////////////////////////////////////

describe("Testing Method checks based on bookNumber if the book has `info` or not", () => {
  const bookStorage = new BookStorage(books);

  test("Test 1: If a parameter searchKey has `info` and if it is not empty return true", () => {
    expect(bookStorage.has_Info(4)).toEqual(true);
  });

  test("Test 2: If a parameter searchKey is missing return false", () => {
    expect(bookStorage.has_Info()).toEqual(false);
  });

  test("Test 3: If a parameter searchKey has `info` and if it is not empty return true(searchKey in this case is bookname)", () => {
    expect(bookStorage.has_Info("Rebellion of Sophie Q. Lister")).toEqual(true);
  });
});

//////////////////////////////////////////////
describe("Test Cases for returns the total price of all books that have the same author.", () => {
  const bookStorage = new BookStorage(books);

  test("Test 1: If a parameter searchValue has then return total cumulative price of books matching the searchValue", () => {
    expect(
      bookStorage.get_total_price_of_books_by_author("Layla Jones")
    ).toEqual(148);
  });

  test("Test 2: If a parameter searchValue has not found throw error says 'nothing found with given search value'", () => {
    expect(() =>
      bookStorage.get_total_price_of_books_by_author("Zoe Jones")
    ).toThrow("nothing found with given search value");
  });

  test("Test 3: missing parameter throws an exception: 'missing parameter'", () => {
    expect(() => bookStorage.get_total_price_of_books_by_author()).toThrow(
      "missing parameter"
    );
  });
});

///////////////////////////////////
describe("Test Cases for get_All_books_By_author", () => {
  const bookStorage = new BookStorage(books);

  test("Test 1: If a parameter searchValue is found return the object", () => {
    const expectedValue = [
      {
        bookNumber: 2,
        bookname: "Maria and My",
        author: "Layla Jones",
        price: 123,
        pages: 100,
        genres: ["humorous essay", "chronic", "fiction"],
        info: { edition: "sixth edition", booktype: "pocketbook", notes: "-" },
      },
      {
        bookNumber: 5,
        bookname: "The adventures of Mike the Millipede",
        author: "Layla Jones",
        price: 25,
        pages: 3420,
        genres: ["chronic", "short story", "fiction"],
      },
    ];

    expect(bookStorage.get_All_books_By_author("Layla Jones")).toEqual(
      expectedValue
    );
  });

  test("Test 2: If a parameter searchValue is found but is not matching with the object return empty array", () => {
    expect(bookStorage.get_All_books_By_author("Zoe Jones")).toEqual([]);
  });

  test("Test 3: missing parameter throws an exception: 'missing parameter'", () => {
    expect(() => bookStorage.get_All_books_By_author()).toThrow(
      "missing parameter"
    );
  });
});

/////////////////////////////////////////////

describe("Test Cases for searches the datastorage for an object with given searchKey.", () => {
  const bookStorage = new BookStorage(books);

  test("Test 1: returns the book object matching the bookNumber", () => {
    const expectedValue = {
      bookNumber: 2,
      bookname: "Maria and My",
      author: "Layla Jones",
      price: 123,
      pages: 100,
      genres: ["humorous essay", "chronic", "fiction"],
      info: {
        edition: "sixth edition",
        booktype: "pocketbook",
        notes: "-",
      },
    };
    expect(bookStorage.get_a_book_matching_bookNumber(2)).toEqual(
      expectedValue
    );
  });

  test("Test 2: returns null if searchKey does not match the bookNumber", () => {
    expect(bookStorage.get_a_book_matching_bookNumber(40)).toEqual(null);
  });

  test("Test 3: missing parameter throws an exception: 'missing parameter'", () => {
    expect(() => bookStorage.get_a_book_matching_bookNumber()).toThrow(
      "missing parameter"
    );
  });
});

////////////////////////////////////////////

describe("Test Cases for checking if a book has info object or not.", () => {
  const bookStorage = new BookStorage(books);

  test("Test 1: If searchKey is matching returns the info object of the book", () => {
    const expectedValue = {
      edition: "first edition",
      booktype: "print-on-demand",
      notes: "special edition",
    };
    expect(bookStorage.get_info(3)).toEqual(expectedValue);
  });

  test("Test 2:The searchKey is matching but if info object not found returns null", () => {
    expect(bookStorage.get_info(5)).toEqual(null);
  });

  test("Test 3: The searchKey is not matching returns null", () => {
    expect(bookStorage.get_info(60)).toEqual(null);
  });

  test("Test 4: missing parameter throws an exception: `'missing parameter'`", () => {
    expect(() => bookStorage.get_info()).toThrow("missing parameter");
  });
});

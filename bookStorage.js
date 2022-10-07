"use strict";

module.exports = class BookStorage {
  constructor(jsondata) {
    if (!jsondata) throw new Error("data storage missing");
    this.bookJsonData = jsondata;
  }

  has_Info(searchKey) {
    if (!searchKey) return false;

    const book = this.bookJsonData.find(
      (ele) => ele.bookNumber === searchKey || ele.bookname === searchKey
    );

    if (!book || !book.info) {
      return false;
    }
    return true;
  }

  get_total_price_of_books_by_author(searchValue) {
    if (searchValue) {
      const books = this.bookJsonData.filter(
        (ele) => ele.author === searchValue
      );
      if (books.length > 0) {
        return books.reduce((pre, cur) => pre + cur.price, 0);
      }
      throw new Error("nothing found with given search value");
    }
    throw new Error("missing parameter");
  }

  get_All_books_By_author(searchValue) {
    if (searchValue) {
      const books = this.bookJsonData.filter(
        (ele) => ele.author === searchValue
      );
      if (books.length > 0) {
        return books.map((ele) => ele);
      }

      if (books.length <= 0) {
        return [];
      }
    }
    throw new Error("missing parameter");
  }

  get_a_book_matching_bookNumber(searchKey) {
    if (searchKey) {
      const book = this.bookJsonData.find(
        (ele) => ele.bookNumber === searchKey
      );
      if (book) {
        return book;
      }
      return null;
    }
    throw new Error("missing parameter");
  }

  get_info(searchKey) {
    if (!searchKey) throw new Error("missing parameter");
    if (searchKey) {
      const book = this.bookJsonData.find(
        (ele) => ele.bookNumber === searchKey
      );
      if (!book || !book.info) {
        return null;
      } else if (book) {
        return book.info;
      }
    }
  }
};

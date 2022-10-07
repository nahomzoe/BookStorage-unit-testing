# Test Cases for get_All_books_By_author

### **get_All_books_By_author(searchValue)**

searches books with given author

> Parameters:
>
> > searchValue is the author of the book to be searched

> Returns:
>
> > Returns an array of book objects of given author. If no book of given author is found, returns an empty array.

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### Test 1: If a parameter searchValue is found return the object

```js
bookStorage.get_All_books_By_author("Layla Jones");
```

return

```js
[
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
```

### Test 2: If a parameter searchValue is found but is not matching with the object return empty array.

```js
bookStorage.get_All_books_By_author("Zoe Jones");
```

return []

### Test 3: missing parameter throws an exception: `'missing parameter'`

```js
bookStorage.get_All_books_By_author();
```

throws an exception `'missing parameter'`

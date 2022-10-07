# Test Cases for searches the datastorage for an object with given searchKey.

### **get_a_book_matching_bookNumber(searchKey)**

Method searches the datastorage for an object with given searchKey. Key is unique.

> Parameters:
>
> > searchKey is the primary key bookNumber of the book

> Returns:
>
> > returns the book object matching the bookNumber or null if there is no match

> Throws:
>
> > if parameter searchKey is missing, throws an exception `'missing parameter'`

### Test 1: returns the book object matching the bookNumber

```js
bookStorage.get_a_book_matching_bookNumber(2);
```

return

```json
{
  "bookNumber": 2,
  "bookname": "Maria and My",
  "author": "Layla Jones",
  "price": 123,
  "pages": 100,
  "genres": ["humorous essay", "chronic", "fiction"],
  "info": { "edition": "sixth edition", "booktype": "pocketbook", "notes": "-" }
}
```

### Test 2: returns null if searchKey does not match the bookNumber

```js
bookStorage.get_a_book_matching_bookNumber(40);
```

return null

### Test 3: missing parameter throws an exception: 'missing parameter'

```js
bookStorage.get_a_book_matching_bookNumber();
```

throws an exception `'missing parameter'`

# Test Cases for checking if a book has info object or not.

### **get_info(searchKey)**

searches the book matching the searchKey and if match is found returns the info object otherwise null is returned

> Parameters:
>
> > searchKey is the bookNumber of the book

> Returns:
>
> > returns the info object of the book matching the searchKey. If no book matching the given searchKey is found or searchKey is missing, null will be returned

> Throws:
> missing parameter throws an exception: `'missing parameter'`
>
> >

### Test 1: If searchKey is matching returns the info object of the book

```js
bookStorage.get_info(3);
```

returns

```json
{
  "edition": "first edition",
  "booktype": "print-on-demand",
  "notes": "special edition"
}
```

### Test 2: The searchKey is matching but if info object not found returns null

```js
bookStorage.get_info(5);
```

return null

### Test 3: The searchKey is not matching returns null

```js
bookStorage.get_info(60);
```

return null

### Test 4: missing parameter throws an exception: `'missing parameter'`

```js
bookStorage.get_info();
```

throws an exception `'missing parameter'`

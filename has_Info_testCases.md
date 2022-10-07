# Test Cases for checking if a book has info object or not.

### **has_info(searchKey)**

Method checks based on bookNumber if the book has `info` or not.

> Parameters:
>
> > searchKey is the bookNumber to be searched
> > I added searchKey can be also bookname

> Returns:
>
> > Returns true if the book matching the searchKey has `info` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

> Throws:
>
> >

### Test 1: If a parameter searchKey has `info` and if it is not empty return true

```js
bookStorage.has_Info(2);
```

return true

### Test 2: If a parameter searchKey is missing return false

```js
bookStorage.has_Info();
```

return false

### Test 3: If a parameter searchKey has `info` and if it is not empty return true(searchKey in this case is bookname)

```js
bookStorage.has_Info("Rebellion of Sophie Q. Lister");
```

return true

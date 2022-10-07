# Book API

## Data

The data will be in a json file. Book is uniquely identified by bookNumber and bookname. There can't be two Books object with the same bookNumber and bookname.

### books.json

```json
[
  {
    "bookNumber": 1,
    "bookname": "Rebellion of Sophie Q. Lister",
    "author": "Felix Harris",
    "price": 25,
    "pages": 500,
    "genres": ["fiction", "textbook", "chronic"],
    "inStock": true,
    "info": {
      "edition": "seventh edition",
      "booktype": "hardcover",
      "notes": "first folio"
    }
  },
  {
    "bookNumber": 2,
    "bookname": "Maria and My",
    "author": "Layla Jones",
    "price": 123,
    "pages": 100,
    "genres": ["humorous essay", "chronic", "fiction"],
    "inStock": false,
    "info": {
      "edition": "sixth edition",
      "booktype": "pocketbook",
      "notes": "-"
    }
  },
  {
    "bookNumber": 3,
    "bookname": "SQL-mysteries",
    "author": "Emily White",
    "price": 200,
    "pages": 3420,
    "genres": ["poem", "nonfiction", "short story"],
    "inStock": true,
    "info": {
      "edition": "first edition",
      "booktype": "print-on-demand",
      "notes": "special edition"
    }
  },
  {
    "bookNumber": 4,
    "bookname": "The adventures of Mike the Millipede",
    "author": "Emily White",
    "price": 36,
    "pages": 3420,
    "genres": ["fiction", "short story", "poem"],
    "inStock": false,
    "info": {
      "edition": "fourth edition",
      "booktype": "leaflet",
      "notes": "no comments"
    }
  },
  {
    "bookNumber": 5,
    "bookname": "The adventures of Mike the Millipede",
    "author": "Layla Jones",
    "price": 25,
    "pages": 3420,
    "genres": ["chronic", "short story", "fiction"],
    "inStock": true
  }
]
```

## Class BookStorage

### **constructor(data)**

Books valid json-array is passed as a parameter `jsondata`. If the parameter is missing, throws an exception `'data storage missing'`.

## Methods

### **has_info(searchKey)**

checks based on bookNumber if the book has `info` or not.

Returns true if the book matching the searchKey has `info` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

### Examples

```js
search("info");
```

returns

```json
{
  "edition": "seventh edition",
  "booktype": "hardcover",
  "notes": "first folio"
}
```

```json
{
  "edition": "sixth edition",
  "booktype": "pocketbook",
  "notes": "-"
}
```

```json
{
  "edition": "first edition",
  "booktype": "print-on-demand",
  "notes": "special edition"
}
```

```json
{
  "edition": "fourth edition",
  "booktype": "leaflet",
  "notes": "no comments"
}
```

```js
search(" ");
```

returns false

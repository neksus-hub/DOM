"use strict";

const books = document.querySelectorAll(".book");

books[5].after(books[2]);
books[5].before(books[3]);
books[1].after(books[0]);

console.log(books);

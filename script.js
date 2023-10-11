"use strict";

const books = document.querySelectorAll(".book");
const body = document.querySelector("body");

console.log(body);

books[5].after(books[2]);
books[5].before(books[3]);
books[1].after(books[0]);

body.classList.add("new-image");

console.log(books);

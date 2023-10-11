"use strict";

const books = document.querySelectorAll(".book");
const body = document.querySelector("body");
let boldTitle = document.querySelectorAll(".book>h2>a");
const removeAdv = document.querySelector(".adv");

console.log(boldTitle);

books[5].after(books[2]);
books[5].before(books[3]);
books[1].after(books[0]);

body.classList.add("new-image");

boldTitle[4].innerHTML = "Книга 3. this и <strong>Прототипы</strong> Объектов";

removeAdv.remove();

console.log(books);

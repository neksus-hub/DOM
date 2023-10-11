"use strict";

const books = document.querySelectorAll(".book");
const body = document.querySelector("body");
let boldTitle = document.querySelectorAll(".book>h2>a");
const removeAdv = document.querySelector(".adv");
const chaptersOfTheSecondBook = books[0].querySelectorAll(".book>ul>li");
const chaptersOfTheFifthBook = books[5].querySelectorAll(".book>ul>li");

let sortingBooks = function () {
  books[5].after(books[2]);
  books[5].before(books[3]);
  books[1].after(books[0]);
};

let sortingTheSecondBook = function () {
  chaptersOfTheSecondBook[5].before(chaptersOfTheSecondBook[8]);
  chaptersOfTheSecondBook[4].before(chaptersOfTheSecondBook[8]);
  chaptersOfTheSecondBook[3].after(chaptersOfTheSecondBook[6]);
  chaptersOfTheFifthBook[7].after(chaptersOfTheFifthBook[5]);
};

let sortingTheFifthBook = function () {
  chaptersOfTheFifthBook[1].after(chaptersOfTheFifthBook[9]);
  chaptersOfTheFifthBook[9].after(chaptersOfTheFifthBook[3]);
  chaptersOfTheFifthBook[3].after(chaptersOfTheFifthBook[4]);
};

let removeAdvFunction = function () {
  removeAdv.remove();
};

let newImageFunction = function () {
  body.classList.add("new-image");
};

let changeTitle = function () {
  boldTitle[4].innerHTML =
    "Книга 3. this и <strong>Прототипы</strong> Объектов";
};

let start = function () {
  sortingBooks();
  newImageFunction();
  changeTitle();
  removeAdvFunction();
  sortingTheSecondBook();
  sortingTheFifthBook();
};

start();

console.log(chaptersOfTheFifthBook);

console.log(books);

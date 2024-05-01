"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var newBook = new Book_1.default("ремонт швейних машин", "иван франко", 1965);
var bookSummary = newBook.getSummary();
console.log(bookSummary);

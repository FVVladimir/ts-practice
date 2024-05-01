"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    ;
    Book.prototype.getSummary = function () {
        return "".concat(this.title, " by ").concat(this.author, " published in ").concat(this.year);
    };
    return Book;
}());
exports.default = Book;

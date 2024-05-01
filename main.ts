import Book from "./Book";
import ElectronicBook from "./ElectronicBook";


const newBook = new Book("ремонт швейних машин", "иван франко", 1965);

const bookSummary = newBook.getSummary();
console.log(bookSummary)
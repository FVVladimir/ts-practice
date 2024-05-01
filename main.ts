import Book from "./Book";
import ElectronicBook from "./ElectronicBook";


const newBook = new Book("ремонт швейних машин", "иван франко", 1965);
const newElectronicBook = new ElectronicBook("ремонт швейних машин", "иван франко", 1965, "PDF");


const bookSummary = newBook.getSummary();
const eIectronicBookSummary = newElectronicBook.getSummary();
console.log(bookSummary)
console.log(eIectronicBookSummary)
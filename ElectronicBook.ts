import Book from './Book.ts';

class ElectronicBook extends Book {
    private format: string;

    constructor(format: string){
        super(title, author, year);
        this.format = format
    };

    public getSummary (){
        return `${this.title} by ${this.author}published in ${this.year}, in format ${this.format}`
    }
}

export default ElectronicBook;
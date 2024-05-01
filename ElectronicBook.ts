import Book from './Book';

class ElectronicBook extends Book {
    private format: string;

    constructor(title: string, author: string, year: number,format: string){
        super(title, author, year);
        this.format = format
    };

    public getSummary (){
        return `${super.getSummary()}, in format ${this.format}`
    }
}

export default ElectronicBook;
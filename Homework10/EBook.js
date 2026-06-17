import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, File Format: ${this.fileFormat}`);
    }

    static change(book, fileFormat) {
        return new EBook (book.title,  
        book.author, 
        book.year,   
        fileFormat      
        )   
    }


    get fileFormat() {
        return this._fileFormat;
    }   

    set fileFormat(format) {
        if (typeof format !== 'string' || format.trim() === '') {
            throw new Error('File format must be a non-empty string');
        }
        else {
            this._fileFormat = format;
        }
    }
}


    let ebook1 = new EBook("The Hobbit", "J.R.R. Tolkien", 1937, "PDF");

    let ebook2 = new EBook("The Catcher in the Rye", "J.D. Salinger", 1951, "EPUB");

    // ebook1.printInfo();
    // ebook2.printInfo();


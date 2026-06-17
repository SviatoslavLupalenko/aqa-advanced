export class Book {    
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }   
    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }

static GetOldestBook(books) {
    if (books.length === 0) {
        throw new Error('No books provided');
    }
    let oldestBook = books[0];
    for (let i = 1; i < books.length; i++) {
        if (books[i].year < oldestBook.year) {
            oldestBook = books[i];
        }
    }
    return oldestBook
}


    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }

    set title(NewTitle) {
        if (typeof NewTitle !== 'string' || NewTitle.trim() === '') {
            throw new Error('Title must be a non-empty string');
        }
        else {
            this._title = NewTitle;
        }
    }

    set author(NewAuthor) { 
        if (typeof NewAuthor !== 'string' || NewAuthor.trim() === '') {
            throw new Error('Author must be a non-empty string');
        }
        else {
            this._author = NewAuthor;
        }
    }

    set year (year) { 
        if (typeof year !== 'number' || year <= 0) {
            throw new Error('Year must be a positive number');
        }
        else {
            this._year = year;
        }
    }
}

let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

let book2 = new Book("1984", "George Orwell", 1949);

let book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);


// book1.printInfo();
// book2.printInfo();
// book3.printInfo();  

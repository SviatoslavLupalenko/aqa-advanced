import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

let book1 = new Book("The Hobbit", "J R R Tolkien", 1937);
let book2 = new Book("1984", "George Orwell", 1949);
let book3 = new Book("The Great Gatsby", "F Scott Fitzgerald", 1925);

let eBook1 = new EBook(
  "Harry Potter and the Philosophers Stone",
  "J K Rowling",
  1997,
  "EPUB",
);
let eBook2 = new EBook(
  "The Fellowship of the Ring",
  "J R R Tolkien",
  1922,
  "PDF",
);

let books = [book1, book2, book3, eBook1, eBook2];

const oldestBook = Book.GetOldestBook(books);

oldestBook.printInfo();

let eBook3 = EBook.change(book1, "PDF");

eBook3.printInfo();

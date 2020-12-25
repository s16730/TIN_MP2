import { Book } from "../Book";

export class BookData extends Book {
  public addedToShelf: Date | null = null;


  constructor(book: Book) {
    super();

    this.title = book.title;
    this.authors = book.authors;
    this.publicationDate = book.publicationDate;
    this.isbn = book.isbn;
    this.description = book.description;
    this.id = book.id;
  }
}

import { Shelf } from "./Shelf";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm/index";
import { Author } from "./Author";
import { BookOnShelf } from "@entities/BookOnShelf";

@Entity()
export class Book {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title: string

  @Column({
    type: "text"
  })
  description: string = '';

  @Column({
    type: "varchar",
    length: 13
  })
  isbn: string = '';

  @Column()
  publicationDate: Date;

  @OneToMany(type => BookOnShelf,
    bookOnShelf => bookOnShelf.book)
  onShelves!: BookOnShelf[];

  @ManyToMany(
    type => Author,
    author => author.books,
    {
      eager: true,
    }
  )
  @JoinTable()
  authors: Author[];

  constructor(title: string, publicationDate: Date, authors: Author[]) {
    this.title = title;
    this.publicationDate = publicationDate;
    this.authors = authors;
  }
}

import { CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm/index";
import { Shelf } from "@entities/Shelf";
import { Book } from "@entities/Book";

@Entity()
export class BookOnShelf {

  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  added!: Date;

  @ManyToOne(
    type => Shelf,
    shelf => shelf.id
  )
  shelf!: Shelf;

  @ManyToOne(
    type => Book,
    book => book.id
  )
  book!: Book;

}

// todo: Connect in ORM

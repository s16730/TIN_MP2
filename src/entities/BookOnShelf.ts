import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm/index";
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
  @JoinColumn({
    name: "shelfId"
  })
  shelf!: Shelf;

  @ManyToOne(
    type => Book,
    book => book.id
  )
  @JoinColumn({ name: "bookId" })
  book!: Book;

}

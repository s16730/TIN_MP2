import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm/index";
import { Book } from "./Book";

@Entity()
export class Author {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "text",
  })
  bio: string = '';

  @Column()
  name: string;

  @Column()
  surname: string;


  @ManyToMany(
    type => Book,
    book => book.authors
  )
  books!: Book[];

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }
}

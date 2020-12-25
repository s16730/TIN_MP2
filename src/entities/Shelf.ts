import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm/index";
import { User } from "./User";
import { Book } from "./Book";
import { BookOnShelf } from "@entities/BookOnShelf";

@Entity()
export class Shelf {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string

  @ManyToOne(
    type => User,
    // user => user.shelves
  )
  @JoinColumn({
    name: "ownerId"
  })
  owner: User


  @OneToMany(type => BookOnShelf,
    bookOnShelf => bookOnShelf.shelf,
    {
      eager: true,
    }
  )
  books!: BookOnShelf[];

  constructor(name: string, owner: User) {
    this.name = name;
    this.owner = owner;
  }

}

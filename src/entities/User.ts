import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { UserRole } from "./UserRole";
import { CreateDateColumn, OneToMany } from "typeorm/index";
import { Shelf } from "./Shelf";
import bcrypt from 'bcrypt';
import logger from "@shared/Logger";


@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email: string

  @Column({
    unique: true,
  })
  username: string;

  @Column({
    default: false
  })
  isSuspended: boolean = false;

  @Column({
    type: "set",
    enum: UserRole,
    default: [UserRole.ANONYMOUS]
  })
  roles: UserRole[] = [];

  @Column({
    type: "text",
  })
  password!: string;

  @OneToMany(
    type => Shelf,
    shelf => shelf.owner,
    {
      cascade: true,
    }
  )
  shelves!: Shelf[];

  @CreateDateColumn()
  createdOn!: Date;

  constructor(email: string, username: string, roles: UserRole[] = []) {
    this.username = username;
    this.email = email;
    this.roles = roles;
  }

  isPasswordValid(password: string) {
    return bcrypt.compareSync(password, this.password);
  }

  async setPassword(password: string) {
    return new Promise<void>(resolve => {
      bcrypt.hash(password, 10, (err, hash) => {
        this.password = hash;

        resolve()
      })
    })
  }
}

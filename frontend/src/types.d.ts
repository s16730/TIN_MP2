import { Book } from "../../entities/Book";
import { BookOnShelf } from "../../entities/BookOnShelf";
import { User } from "../../entities/User";
import { UserRole } from "../../entities/UserRole";

export interface DataObject {
  [name: string]: any,
}

export interface ErrorObject {
  name: string,
  message: string;
}

export interface Author {
  id: number;
  bio: string;
  name: string;
  surname: string;
  books: Book[];
}


export interface Book {
  id: number;
  title: string
  description: string;
  isbn: string;
  publicationDate: Date;
  onShelves: BookOnShelf[];
  authors: Author[];
}

export interface Shelf {
  id: number;
  name: string
  owner: User
  books: BookOnShelf[];
}


export interface BookOnShelf {
  id: number;
  added: Date;
  shelf: Shelf;
  book: Book;
}


export interface User {
  id: number;
  email: string
  username: string;
  isSuspended: boolean;
  roles: UserRole[];
  password: string;
  shelves: Shelf[];
  createdOn: Date;
  hasUserEditPermission: boolean;
  hasBlockPermission: boolean;
  hasPasswordChangePermission: boolean;
  hasContentEditPermission: boolean;
}

export interface FormSubmit {
  url: string,
  data: DataObject,
}

export interface Response {
  errors?: [],
  redirect?: string,
  message?: string;
}

export interface AuthorResponse {
  author: Author,
  books: Book[],
}

export interface AuthorListResponse {
  authors: Author[],
}

export interface BookListResponse {
  books: Book[],
}

export interface BookResponse {
  book: Book,
  authorSimilar: Book[],
}

export interface ShelfResponse {
  books: Book[],
  shelf: Shelf,
}

export interface ShelfListResponse {
  shelves: Shelf[],
}

export interface FullUserResponse {
  shelves: Shelf[],
  user: User,
}

export interface UserResponse {
  user: User,
}

export interface UserListResponse {
  users: User[],
}

export interface ImageSourceSet {
}

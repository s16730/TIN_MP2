import {
  Author,
  AuthorListResponse,
  AuthorResponse,
  Book,
  BookListResponse,
  BookResponse, FullUserResponse,
  Shelf,
  ShelfListResponse,
  ShelfResponse,
  User,
  UserListResponse,
  UserResponse
} from "@/types";
import { EndpointService } from "@/services/EndpointService";
import { Endpoint } from "@/const/Endpoint";

export class DataService {
  private static _instance: DataService;

  static get instance(): DataService {
    if (!DataService._instance) {
      DataService._instance = new DataService()
    }

    return DataService._instance;
  }

  async getUser(id: string): Promise<FullUserResponse> {
    return (await fetch(EndpointService.getUrl(Endpoint.UserGet, { id }))).json();
  }

  async getCurrentUser(): Promise<FullUserResponse> {
    return (await fetch(EndpointService.getUrl(Endpoint.UserCurrent))).json();
  }

  async getAllUsers(): Promise<UserListResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.UserGetAll))).json();
  }

  async getBook(id: string): Promise<BookResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.BookGet, { id }))).json();
  }

  async getAllBooks(): Promise<BookListResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.BookGetAll))).json();
  }

  async getAuthor(id: string): Promise<AuthorResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.AuthorGet, { id }))).json();
  }

  async getAllAuthors(): Promise<AuthorListResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.AuthorGetAll))).json();
  }

  async getShelf(id: string): Promise<ShelfResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.ShelfGet, { id }))).json();
  }

  async getAllShelves(): Promise<ShelfListResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.ShelfGetAll))).json();
  }
}

import { AuthorListResponse, AuthorResponse, Book, BookListResponse, BookResponse, FullUserResponse, Shelf, ShelfListResponse, ShelfResponse, UserListResponse } from "@/types";
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
    return (await fetch(EndpointService.getUrl(Endpoint.UserGet, { id }), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
      },
    })).json();
  }

  async getCurrentUser(): Promise<FullUserResponse | false> {
    const res = (await fetch(EndpointService.getUrl(Endpoint.UserCurrent), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
      },
    }));

    if (res.status === 200) {
      return res.json()
    } else return false;

  }

  async getAllUsers(): Promise<UserListResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.UserGetAll), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
      },
    })).json();
  }

  async getBook(id: string): Promise<BookResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.BookGet, { id }), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
      },
    })).json();
  }

  async getAllBooks(): Promise<BookListResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.BookGetAll), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
      },
    })).json();
  }

  async getAuthor(id: string): Promise<AuthorResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.AuthorGet, { id }), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
      },
    })).json();
  }

  async getAllAuthors(): Promise<AuthorListResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.AuthorGetAll), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
      },
    })).json();
  }

  async getShelf(id: string): Promise<ShelfResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.ShelfGet, { id }), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
      },
    })).json();
  }

  async getAllShelves(): Promise<ShelfListResponse> {
    return await (await fetch(EndpointService.getUrl(Endpoint.ShelfGetAll), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
      },
    })).json();
  }

  async RemoveFromShelf(book: Book, shelf: Shelf) {
    return (await fetch(
      EndpointService.getUrl(Endpoint.ShelfRemoveBook,), {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
        },
        body: JSON.stringify({
          shelfId: shelf.id,
          bookId: book.id,
        })
      }
    )).status === 200;
  }

  async AddToShelf(book: Book, shelf: Shelf) {
    return (await fetch(
      EndpointService.getUrl(Endpoint.ShelfAddBook), {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
        },
        body: JSON.stringify({
          shelfId: shelf.id,
          bookId: book.id,
        })
      }
    )).status === 200;
  }
}


export class NotFoundException implements Error {
  message: string;
  name: string;

  constructor(message:string = "", name: string = "404 Not Found") {
    this.message = message
    this.name = message
  }
}

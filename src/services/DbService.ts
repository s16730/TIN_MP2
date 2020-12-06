import { Connection, createConnection } from "typeorm/index";

export class DbService {
  private _connection!: Connection;


  constructor() {
  }

  public get connection() {
    return this._connection;
  }

  public async createConnection() {
    if (!this._connection) {
      this._connection = await createConnection();
    } else {
      console.log('Connection already exists!')
    }
  }
}

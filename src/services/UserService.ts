import { createQueryBuilder, getManager, getRepository, QueryBuilder, Repository } from "typeorm/index";
import { Book } from "@entities/Book";
import { DataObject } from "@/types";
import { Author } from "@entities/Author";
import { User } from "@entities/User";

export class UserService {

  private userRepository: Repository<User>;

  private static _instance: UserService;

  public static get instance() {
    if (!this._instance) {
      this._instance = new UserService()
    }

    return this._instance
  }

  private constructor() {
    this.userRepository = getRepository<User>(User)
  }

  public getUsers(params?: DataObject): Promise<User[]> {
    return this.userRepository.find(params)
  }

  static currentUser() {
    return null;
  }
}


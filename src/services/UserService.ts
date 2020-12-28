import { createQueryBuilder, getManager, getRepository, QueryBuilder, Repository } from "typeorm/index";
import { Book } from "@entities/Book";
import { DataObject } from "@/types";
import { Author } from "@entities/Author";
import { User } from "@entities/User";
import { Validator } from "@/utils/Validator";

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

  async userExists(username: string, email: string) {
    const usernameUsers = await this.userRepository.find({ username })
    const emailUsers = await this.userRepository.find({ email })

    return usernameUsers.length !== 0 || emailUsers.length !== 0;
  }

  static validate(body: DataObject) {
    const errors = [];

    errors.push(
      Validator.isFilled("username", body.username),
      Validator.isFilled("password", body.password),
      Validator.isFilled("repeatPassword", body.repeatPassword),
      Validator.isFilled("email", body.email),
      Validator.isEmail("email", body.email),
      Validator.isSame("repeatPassword", body.repeatPassword, body.password),
      Validator.isPasswordComplexEnough('password', body.password)
    );

    return errors.filter(e => e);
  }
}


import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import express, { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';
import BaseRouter from './routes/index'

import logger from '@shared/Logger';
import { BookController } from "./controllers/BookController";
import router from "./routes/index";
import { createConnection } from "net";
import { DbService } from "./services/DbService";
import { getConnection, getRepository } from "typeorm/index";
import { Book } from "@entities/Book";
import { Author } from "@entities/Author";
import { User } from "@entities/User";
import { Shelf } from "@entities/Shelf";


import authors from "./mock/authors.json"
import books from "./mock/books.json"
import users from "./mock/users.json"
import shelves from "./mock/shelves.json"
import { Random } from "./utils/Random";
import { UserRole } from "@entities/UserRole";
import { BookOnShelf } from "@entities/BookOnShelf";

import passport from "passport";
import flash from 'connect-flash';
import session from 'express-session';
import passportSetup from "@/config/passport";

logger.info("Starting application...")

// <editor-fold desc="Express setup">

const app = express();
const { BAD_REQUEST } = StatusCodes;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET!
}))

passportSetup(passport)
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

const appDir = path.dirname(require.main!.filename)
const viewDir = appDir + '/views'
app.use((req, res, next) => {
  res.locals.appDir = appDir;
  res.locals.viewDir = viewDir;
  return next();
})
// </editor-fold>

// <editor-fold desc="DB setup">
const dbService = new DbService();
logger.info("Establishing database connection...")
dbService.createConnection().then(() => {
  logger.info("Database connection established")

// </editor-fold>

// <editor-fold desc="Router setup">

// Add APIs
  app.use('/', BaseRouter);
// app.use('/api', BaseRouter);
// router.get('', (req, res, next) => {
//     res.render("page/book/bookView")
// })

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.err(err, true);
    return res.status(BAD_REQUEST).json({
      error: err.message,
    });
  });
// </editor-fold>


// <editor-fold desc="Front setup">
  const viewsDir = path.join(__dirname, 'views');
  app.set('views', viewsDir);
  const staticDir = path.join(__dirname, 'public');
  app.use(express.static(staticDir));
// </editor-fold>

  if ("1" === process.env.REBUILD_DATABASE) {
// <editor-fold desc="Insert test data">
    getConnection().synchronize(true).then(async () => {

      const authorRepository = getRepository<Author>(Author);

      let authorList: Author[] = [];

      authors.forEach(author => {
        const a = authorRepository.create();
        a.name = author.name;
        a.surname = author.surname;
        a.bio = author.bio;

        authorList.push(a)
      })

      authorList = await authorRepository.save(authorList)

      const bookRepository = getRepository<Book>(Book)
      let bookList: Book[] = [];

      books.forEach(book => {
        const b = bookRepository.create();

        b.description = book.description;
        b.isbn = Random.getISBN();
        b.title = book.title;
        b.publicationDate = Random.getPublicationDate();
        b.authors = [authorList[Math.floor(Math.random() * authorList.length)]];

        bookList.push(b)
      })

      bookList = await bookRepository.save(bookList);

      bookList.forEach(book => {
        const authorNumber = Random.getRandomInt(1, 2);
        const authors: Set<Author> = new Set<Author>(authorList);

        book.authors = [];

        for (let i = 0; i < authorNumber; i++) {
          book.authors.push(Random.fromSet(authors))
        }
      });

      bookList = await bookRepository.save(bookList);


      const userRepository = getRepository<User>(User);
      let userList: User[] = []
      let u = userRepository.create();
      u.username = "admin"
      u.email = "admin@test.test"
      u.roles = [UserRole.ADMIN]
      userList.push(u)

      u = userRepository.create();
      u.username = "editor"
      u.email = "editor@test.test"
      u.roles = [UserRole.EDITOR]
      userList.push(u)

      users.forEach(user => {
        const u = userRepository.create();

        u.email = user.email;
        u.username = user.username;
        u.roles = [UserRole.AUTHORIZED];
        u.shelves = [];

        userList.push(u);
      })

      userList = await userRepository.save(userList);


      const shelfRepository = getRepository<Shelf>(Shelf);
      let shelfList: Shelf[] = [];

      userList.forEach(user => {
        user.shelves = [];

        shelves.forEach(shelf => {
          const s = shelfRepository.create()
          s.name = shelf.name;
          s.owner = user;

          shelfList.push(s)
        })
      })

      shelfList = await shelfRepository.save(shelfList);

      const bookOnShelfRepository = getRepository<BookOnShelf>(BookOnShelf)
      const bookOnShelfList: BookOnShelf[] = [];

      shelfList.forEach(shelf => {
        const bookCandidates = new Set<Book>(bookList)

        for (let i = Random.getRandomInt(0, bookCandidates.size - 1); i >= 0; i--) {
          const bs = bookOnShelfRepository.create();
          bs.added = Random.randomDate(new Date('01-01-2000'), new Date());
          bs.book = Random.fromSet<Book>(bookCandidates);
          bs.shelf = shelf;

          bookOnShelfList.push(bs);
        }

      });

      await bookOnShelfRepository.save(bookOnShelfList);

      logger.info("Mock data inserted")
    });
// </editor-fold>
  }

  logger.info("Application ready")

}).catch(err => {
  logger.err("Database connection failed!")
  logger.err(err);
})


// Export express instance

export default app;

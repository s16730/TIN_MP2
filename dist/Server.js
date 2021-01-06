"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
require("express-async-errors");
const index_1 = __importDefault(require("./routes/index"));
const Logger_1 = __importDefault(require("@shared/Logger"));
const DbService_1 = require("@services/DbService");
const index_2 = require("typeorm/index");
const Book_1 = require("@entities/Book");
const Author_1 = require("@entities/Author");
const User_1 = require("@entities/User");
const Shelf_1 = require("@entities/Shelf");
const authors_json_1 = __importDefault(require("./mock/authors.json"));
const books_json_1 = __importDefault(require("./mock/books.json"));
const users_json_1 = __importDefault(require("./mock/users.json"));
const shelves_json_1 = __importDefault(require("./mock/shelves.json"));
const Random_1 = require("./utils/Random");
const UserRole_1 = require("@entities/UserRole");
const BookOnShelf_1 = require("@entities/BookOnShelf");
const passport_1 = __importDefault(require("passport"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const express_session_1 = __importDefault(require("express-session"));
const passport_2 = __importDefault(require("@/config/passport"));
Logger_1.default.info("Starting application...");
// <editor-fold desc="Express setup">
const app = express_1.default();
const { BAD_REQUEST } = http_status_codes_1.default;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default());
app.use(express_session_1.default({
    secret: process.env.SESSION_SECRET,
}));
passport_2.default(passport_1.default);
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(connect_flash_1.default());
// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan_1.default('dev'));
}
// Security
if (process.env.NODE_ENV === 'production') {
    app.use(helmet_1.default());
}
const appDir = path_1.default.dirname(require.main.filename);
const viewDir = appDir + '/views';
app.use((req, res, next) => {
    res.locals.appDir = appDir;
    res.locals.viewDir = viewDir;
    return next();
});
// </editor-fold>
// <editor-fold desc="DB setup">
const dbService = new DbService_1.DbService();
Logger_1.default.info("Establishing database connection...");
dbService.createConnection().then(() => {
    Logger_1.default.info("Database connection established");
    // </editor-fold>
    // <editor-fold desc="Router setup">
    // Add APIs
    app.use('/', index_1.default);
    // app.use('/api', BaseRouter);
    // router.get('', (req, res, next) => {
    //     res.render("page/book/bookView")
    // })
    // Print API errors
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    app.use((err, req, res, next) => {
        Logger_1.default.err(err, true);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    });
    // </editor-fold>
    // <editor-fold desc="Front setup">
    const viewsDir = path_1.default.join(__dirname, 'views');
    app.set('views', viewsDir);
    const staticDir = path_1.default.join(__dirname, 'public');
    app.use(express_1.default.static(staticDir));
    // </editor-fold>
    if ("1" === process.env.REBUILD_DATABASE) {
        // <editor-fold desc="Insert test data">
        index_2.getConnection().synchronize(true).then(() => __awaiter(void 0, void 0, void 0, function* () {
            const authorRepository = index_2.getRepository(Author_1.Author);
            let authorList = [];
            authors_json_1.default.forEach(author => {
                const a = authorRepository.create();
                a.name = author.name;
                a.surname = author.surname;
                a.bio = author.bio;
                authorList.push(a);
            });
            authorList = yield authorRepository.save(authorList);
            const bookRepository = index_2.getRepository(Book_1.Book);
            let bookList = [];
            books_json_1.default.forEach(book => {
                const b = bookRepository.create();
                b.description = book.description;
                b.isbn = Random_1.Random.getISBN();
                b.title = book.title;
                b.publicationDate = Random_1.Random.getPublicationDate();
                b.authors = [authorList[Math.floor(Math.random() * authorList.length)]];
                bookList.push(b);
            });
            bookList = yield bookRepository.save(bookList);
            bookList.forEach(book => {
                const authorNumber = Random_1.Random.getRandomInt(1, 2);
                const authors = new Set(authorList);
                book.authors = [];
                for (let i = 0; i < authorNumber; i++) {
                    book.authors.push(Random_1.Random.fromSet(authors));
                }
            });
            bookList = yield bookRepository.save(bookList);
            const userRepository = index_2.getRepository(User_1.User);
            let userList = [];
            let u = userRepository.create();
            u.username = "admin";
            u.email = "admin@test.test";
            u.roles = [UserRole_1.UserRole.ADMIN];
            userList.push(u);
            u = userRepository.create();
            u.username = "editor";
            u.email = "editor@test.test";
            u.roles = [UserRole_1.UserRole.EDITOR];
            userList.push(u);
            users_json_1.default.forEach(user => {
                const u = userRepository.create();
                u.email = user.email;
                u.username = user.username;
                u.roles = [UserRole_1.UserRole.AUTHORIZED];
                u.shelves = [];
                userList.push(u);
            });
            userList = yield userRepository.save(userList);
            const shelfRepository = index_2.getRepository(Shelf_1.Shelf);
            let shelfList = [];
            userList.forEach(user => {
                user.shelves = [];
                shelves_json_1.default.forEach(shelf => {
                    const s = shelfRepository.create();
                    s.name = shelf.name;
                    s.owner = user;
                    shelfList.push(s);
                });
            });
            shelfList = yield shelfRepository.save(shelfList);
            const bookOnShelfRepository = index_2.getRepository(BookOnShelf_1.BookOnShelf);
            const bookOnShelfList = [];
            shelfList.forEach(shelf => {
                const bookCandidates = new Set(bookList);
                for (let i = Random_1.Random.getRandomInt(0, bookCandidates.size - 1); i >= 0; i--) {
                    const bs = bookOnShelfRepository.create();
                    bs.added = Random_1.Random.randomDate(new Date('01-01-2000'), new Date());
                    bs.book = Random_1.Random.fromSet(bookCandidates);
                    bs.shelf = shelf;
                    bookOnShelfList.push(bs);
                }
            });
            yield bookOnShelfRepository.save(bookOnShelfList);
            Logger_1.default.info("Mock data inserted");
        }));
        // </editor-fold>
    }
    Logger_1.default.info("Application ready");
}).catch(err => {
    Logger_1.default.err("Database connection failed!");
    Logger_1.default.err(err);
});
// Export express instance
exports.default = app;

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
logger.info("Starting application...")

// <editor-fold desc="Express setup">

const app = express();
const { BAD_REQUEST } = StatusCodes;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

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

  logger.info("Application ready")
}).catch(err => {
  logger.err("Database connection failed!")
  logger.err(err);
})

// Export express instance
export default app;

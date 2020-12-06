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


const app = express();
const { BAD_REQUEST } = StatusCodes;



/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({extended: true}));
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
app.use( (req, res, next) => {
    res.locals.appDir = appDir;
    res.locals.viewDir = viewDir;
    return next();
})

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



/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/

const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

// Export express instance
export default app;

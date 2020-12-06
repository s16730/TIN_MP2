import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { paramMissingError, IRequest } from '@shared/constants';
import { BookController } from "../controllers/BookController";


const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


router.get('/:id', (req, res, next) => {
  BookController.getBookPage(req, res)
});

router.get('/all', (req, res, next) => {
  BookController.getBookViewPage(req, res)
});
router.get('/', (req, res, next) => {
  BookController.getBookViewPage(req, res)
});

router.get('/add', (req, res, next) => {
  BookController.getAddBookPage(req, res)
});

router.get('/:id/edit', (req, res, next) => {
  BookController.getAddBookPage(req, res)
});

export default router;

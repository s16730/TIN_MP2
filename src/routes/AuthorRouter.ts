import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { paramMissingError, IRequest } from '@shared/constants';
import { AuthorController } from "../controllers/AuthorController";


const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

router.get('/:id', (req, res, next) => {
  AuthorController.getAuthorPage(req, res)
})

router.get('/add', (req, res, next) => {
  AuthorController.getAddAuthorPage(req, res)
})

router.get('/:id/edit', (req, res, next) => {
  AuthorController.getAddAuthorPage(req, res)
})

router.get('/all', (req, res, next) => {
  AuthorController.getAuthorViewPage(req, res)
})

router.get('/:id/books', (req, res, next) => {
  AuthorController.getAuthorBooksViewPage(req, res)
})

export default router;

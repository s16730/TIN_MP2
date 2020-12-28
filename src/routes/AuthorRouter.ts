import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { paramMissingError, IRequest } from '@shared/constants';
import { AuthorController } from "@/controllers/AuthorController";


const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



router.get('/add', (req, res, next) => {
  AuthorController.getEditAuthorPage(req, res)
})
router.post('/add', (req, res, next) => {
  AuthorController.addAuthor(req, res)
})

router.get('/:id/edit', (req, res, next) => {
  AuthorController.getEditAuthorPage(req, res)
})
router.post('/:id/edit', (req, res, next) => {
  AuthorController.updateAuthor(req, res)
})

router.get('/all', (req, res, next) => {
  AuthorController.getAuthorViewPage(req, res)
})

router.get('/:id/books', (req, res, next) => {
  AuthorController.getAuthorBooksViewPage(req, res)
})

router.get('/:id', (req, res, next) => {
  AuthorController.getAuthorPage(req, res)
})

export default router;

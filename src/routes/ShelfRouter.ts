import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { paramMissingError, IRequest } from '@shared/constants';
import { BookController } from "../controllers/BookController";
import { ShelfController } from "../controllers/ShelfController";


const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


router.get('/all', (req, res, next) => {
  ShelfController.getShelvesViewPage(req, res)
})

router.get('/all/short', (req, res, next) => {
  // todo: only for logged users, returns only data for adding to shelf
})

router.post('/:shelfId/add-book/:bookId', ((req, res, next) => {
}))

router.get('/add', ((req, res, next) => {
  ShelfController.getEditShelfPage(req, res)
}))
router.post('/add', ((req, res, next) => {
  ShelfController.addShelf(req, res)
}))

router.get('/:id/edit', ((req, res, next) => {
  ShelfController.getEditShelfPage(req, res)
}))

router.post('/:id/edit', ((req, res, next) => {
  ShelfController.updateShelf(req, res)
}))

router.get('/:id', (req, res, next) => {
  ShelfController.getShelfPage(req, res)
})

export default router;

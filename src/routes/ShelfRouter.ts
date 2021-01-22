import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import { ShelfController } from "@/controllers/ShelfController";
import passport from "passport";


const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


router.get('/all', passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    ShelfController.getShelves(req, res)
  })

router.get('/all/short',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    // todo: only for logged users, returns only data for adding to shelf
  })

router.get('/add', ((req, res, next) => {
  ShelfController.getEditShelfPage(req, res)
}))
router.post('/add',
  passport.authenticate('jwt', { session: false }),
  ((req, res, next) => {
    ShelfController.addShelf(req, res)
  }))

router.get('/:id/edit',
  passport.authenticate('jwt', { session: false }),
  ((req, res, next) => {
    ShelfController.getEditShelfPage(req, res)
  }))

router.post('/:id/edit',
  passport.authenticate('jwt', { session: false }),
  ((req, res, next) => {
    ShelfController.updateShelf(req, res)
  }))

router.post('/add-book',
  passport.authenticate('jwt', { session: false }),
  ((req, res, next) => {
    ShelfController.AddBookToShelf(req, res)
  }))

router.post('/remove-book',
  passport.authenticate('jwt', { session: false }),
  ((req, res, next) => {
    ShelfController.RemoveBookFromShelf(req, res)
  }))

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    ShelfController.getShelf(req, res)
  })

export default router;

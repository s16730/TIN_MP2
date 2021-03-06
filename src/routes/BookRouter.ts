import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import { BookController } from "@/controllers/BookController";
import { UserService } from "@services/UserService";
import { ArrayHelper } from "@/utils/ArrayHelper";
import { UserRole } from "@entities/UserRole";
import { ForbiddenException } from "@/exceptions/ForbiddenException";
import passport from "passport";


const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


router.get('/all', (req, res, next) => {
  BookController.getBooks(req, res)
});
router.get('/', (req, res, next) => {
  BookController.getBooks(req, res)
});

router.get('/add',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
  const user = await UserService.currentUser(req);

  if (user && ArrayHelper.intersect(user.roles, [UserRole.ADMIN, UserRole.EDITOR])) {
    BookController.getEditAddBookPage(req, res)
  } else {
    throw new ForbiddenException();
  }
});
router.post('/add',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
  const user = await UserService.currentUser(req);

  if (user && ArrayHelper.intersect(user.roles, [UserRole.ADMIN, UserRole.EDITOR])) {
    BookController.addBook(req, res)
  } else {
    throw new ForbiddenException();
  }
});

router.get('/:id/edit',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    const user = await UserService.currentUser(req);

    if (user && ArrayHelper.intersect(user.roles, [UserRole.ADMIN, UserRole.EDITOR])) {
      BookController.getEditAddBookPage(req, res)
    } else {
      throw new ForbiddenException();
    }

  });
router.post('/:id/edit',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    const user = await UserService.currentUser(req);

    if (user && ArrayHelper.intersect(user.roles, [UserRole.ADMIN, UserRole.EDITOR])) {
      await BookController.updateBook(req, res)

      BookController.getBooks(req, res)
    } else {
      throw new ForbiddenException();
    }

  });


router.get('/:id', (req, res, next) => {
  BookController.getBook(req, res)
});

export default router;

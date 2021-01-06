import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import { BookController } from "../controllers/BookController";
import { UserService } from "@services/UserService";
import { ArrayHelper } from "@/utils/ArrayHelper";
import { UserRole } from "@entities/UserRole";
import { ForbiddenException } from "@/exceptions/ForbiddenException";


const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


router.get('/all', (req, res, next) => {
  BookController.getBookViewPage(req, res)
});
router.get('/', (req, res, next) => {
  BookController.getBookViewPage(req, res)
});

router.get('/add', async (req, res, next) => {
  const user = await UserService.currentUser(req);

  if (user && ArrayHelper.intersect(user.roles, [UserRole.ADMIN, UserRole.EDITOR])) {
    BookController.getEditAddBookPage(req, res)
  } else {
    throw new ForbiddenException();
  }
});
router.post('/add', async (req, res, next) => {
  const user = await UserService.currentUser(req);

  if (user && ArrayHelper.intersect(user.roles, [UserRole.ADMIN, UserRole.EDITOR])) {
    BookController.addBook(req, res)
  } else {
    throw new ForbiddenException();
  }
});

router.get('/:id/edit', async (req, res, next) => {
  const user = await UserService.currentUser(req);

  if (user && ArrayHelper.intersect(user.roles, [UserRole.ADMIN, UserRole.EDITOR])) {
    BookController.getEditAddBookPage(req, res)
  } else {
    throw new ForbiddenException();
  }

});
router.post('/:id/edit', async (req, res, next) => {
  const user = await UserService.currentUser(req);

  if (user && ArrayHelper.intersect(user.roles, [UserRole.ADMIN, UserRole.EDITOR])) {
    await BookController.updateBook(req, res)

    BookController.getBookViewPage(req, res)
  } else {
    throw new ForbiddenException();
  }

});


router.get('/:id', (req, res, next) => {
  BookController.getBookPage(req, res)
});

export default router;

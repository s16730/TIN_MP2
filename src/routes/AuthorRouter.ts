import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import { AuthorController } from "@/controllers/AuthorController";
import { UserService } from "@services/UserService";
import { ArrayHelper } from "@/utils/ArrayHelper";
import { UserRole } from "@entities/UserRole";
import { BookController } from "@/controllers/BookController";
import { ForbiddenException } from "@/exceptions/ForbiddenException";
import passport from "passport";


const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


router.get('/add', async (req, res, next) => {
  const user = await UserService.currentUser(req);

  if (user && ArrayHelper.intersect(user.roles, [UserRole.ADMIN, UserRole.EDITOR])) {
    AuthorController.getEditAuthorPage(req, res)
  } else {
    throw new ForbiddenException();
  }
})
router.post('/add',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    const user = await UserService.currentUser(req);

    if (user && ArrayHelper.intersect(user.roles, [UserRole.ADMIN, UserRole.EDITOR])) {
      AuthorController.addAuthor(req, res)
    } else {
      throw new ForbiddenException();
    }
  })

router.get('/:id/edit',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    const user = await UserService.currentUser(req);

    if (user && ArrayHelper.intersect(user.roles, [UserRole.ADMIN, UserRole.EDITOR])) {
      AuthorController.getEditAuthorPage(req, res)
    } else {
      throw new ForbiddenException();
    }
  })
router.post('/:id/edit',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    const user = await UserService.currentUser(req);

    if (user && ArrayHelper.intersect(user.roles, [UserRole.ADMIN, UserRole.EDITOR])) {
      AuthorController.updateAuthor(req, res)
    } else {
      throw new ForbiddenException();
    }
  })

router.get('/all', (req, res, next) => {
  AuthorController.getAuthors(req, res)
})

router.get('/:id/books', (req, res, next) => {
  AuthorController.getAuthorBooks(req, res)
})

router.get('/:id', (req, res, next) => {
  AuthorController.getAuthor(req, res)
})

export default router;

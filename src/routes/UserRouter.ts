import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import { BookController } from "../controllers/BookController";
import { ShelfController } from "../controllers/ShelfController";
import { UserController } from "../controllers/UserController";
import passport from "passport";
import { UserService } from "@services/UserService";
import { User } from "@entities/User";
import { ArrayHelper } from "@/utils/ArrayHelper";
import { UserRole } from "@entities/UserRole";
import { ForbiddenException } from "@/exceptions/ForbiddenException";


const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


router.get('/all', (req, res, next) => {
  UserController.getUsers(req, res)
})

router.get('/', (req, res, next) => {

  UserController.getCurrentUser(req, res)
})

router.post('/register', (req, res, next) => {
  UserController.register(req, res, next)
})


router.post(
  '/login',
  passport.authenticate("local"),
  (req, res, next) => {
    res.end(JSON.stringify({
      redirect: "/user"
    }))
  }
)

router.get('/logout', (req, res, next) => {
  UserController.logout();
})

router.get('/:id/edit', async (req, res, next) => {
  const user = await UserService.currentUser(req);

  if (user && user.id.toString() === req.params.id) {
    UserController.getFullUser(req, res)
  } else {
    throw new ForbiddenException();
  }
})

router.get('/:id', (req, res, next) => {
  UserController.getFullUser(req, res)
})


export default router;

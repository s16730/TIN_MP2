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
import jwt from 'jsonwebtoken'
import { config } from "dotenv";
import { passportConfig } from "@/config/passportConfig";

const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


router.get('/all', (req, res, next) => {
  UserController.getUsers(req, res)
})

router.get('/',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    UserController.getCurrentUser(req, res)
  })
router.get('/current',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    UserController.getCurrentUser(req, res)
  })

router.post('/register', (req, res, next) => {
  UserController.register(req, res, next)
})


router.post(
  '/login',
  async (req, res, next) => {
    const { login, password } = req.body;
    const user = (await UserService.instance.getUsers({ email: login }))[0];
    if (user) {
      if (user.isPasswordValid(password)) {
        const token = jwt.sign(
          { email: login },
          passportConfig.secret,
          {
            expiresIn: 1000000000000
          });

        // @ts-ignore
        delete (user.password);

        res.status(200).end(JSON.stringify({
          currentUser: user,
          token,
          redirect: '/'
        }))
      } else {
        res.status(400).end(JSON.stringify({
          message: "Nieprawidłowy login lub hasło"
        }))
      }
    } else {
      res.status(400).end(JSON.stringify({
        message: "Nieprawidłowy login lub hasło"
      }))
    }

    res.end(JSON.stringify({
      redirect: "/user"
    }))
  }
)

router.get('/logout', (req, res, next) => {
  UserController.logout(req);
})

router.get('/:id/edit',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
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

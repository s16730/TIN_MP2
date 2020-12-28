import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { paramMissingError, IRequest } from '@shared/constants';
import { BookController } from "../controllers/BookController";
import { ShelfController } from "../controllers/ShelfController";
import { UserController } from "../controllers/UserController";
import passport from "passport";


const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


router.get('/all', (req, res, next) => {
  UserController.getUserViewPage(req, res)
})

router.get('/', (req, res, next) => {

  UserController.getCurrentUserPage(req, res)
})

router.get('/register', (req, res, next) => {
  UserController.getRegistrationPage(req, res)
})
router.post('/register', (req, res, next) => {
  UserController.register(req, res, next)
})


router.get('/login', (req, res, next) => {
  UserController.getLoginPage(req, res)
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

router.get('/:id/edit', (req, res, next) => {
  UserController.getEditPage(req, res)
})

router.get('/:id', (req, res, next) => {
  UserController.getUserPage(req, res)
})


export default router;

import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { paramMissingError, IRequest } from '@shared/constants';
import { BookController } from "../controllers/BookController";
import { ShelfController } from "../controllers/ShelfController";
import { UserController } from "../controllers/UserController";


const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


router.get('/all', (req, res, next) => {
  UserController.getUserViewPage(req, res)
})

router.get('/register', (req, res, next) => {
  UserController.getRegistrationPage(req, res)
})


router.get('/login', (req, res, next) => {
  UserController.getLoginPage(req, res)
})

router.post('/login', ((req, res) => {
}))

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

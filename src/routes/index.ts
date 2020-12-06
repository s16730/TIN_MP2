import { Router } from 'express';
import BookRouter from './BookRouter';
import AuthorRouter from './AuthorRouter';
import UserRouter from './UserRouter';
import ShelfRouter from './ShelfRouter';
import { BookController } from "../controllers/BookController";


// Init router and path
const router = Router();

// Add sub-routes
router.use('/user', UserRouter);
router.use('/shelf', ShelfRouter);
router.use('/book', BookRouter);
router.use('/author', AuthorRouter);

router.get('', ((req, res, next) => {
  BookController.getBookViewPage(req, res)
}))

// Export the base-router
export default router;

import { Router } from 'express';
import BookRouter from './BookRouter';
import AuthorRouter from './AuthorRouter';
import UserRouter from './UserRouter';
import ShelfRouter from './ShelfRouter';
import { vueDir } from "@server";


// Init router and path
const router = Router();

// Add sub-routes
router.use('/api/user', UserRouter);
router.use('/api/shelf', ShelfRouter);
router.use('/api/book', BookRouter);
router.use('/api/author', AuthorRouter);


const path = __dirname + '/app/views/';

router.get('/*', ((req, res, next) => {
  res.sendFile(vueDir + "/index.html")
}))

// Export the base-router
export default router;

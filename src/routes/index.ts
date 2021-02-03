import { Router } from 'express';
import BookRouter from './BookRouter';
import AuthorRouter from './AuthorRouter';
import UserRouter from './UserRouter';
import ShelfRouter from './ShelfRouter';
import { vueDir } from "@server";
import logger from "@shared/Logger";


// Init router and path
const router = Router();

// Add sub-routes
router.use('/api/user', UserRouter);
router.use('/api/shelf', ShelfRouter);
router.use('/api/book', BookRouter);
router.use('/api/author', AuthorRouter);


const path = __dirname + '/app/views/';

router.get('/*', ((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self' 'unsafe-eval';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests"
  )

  res.sendFile(vueDir + "/index.html")
}))

// Export the base-router
export default router;

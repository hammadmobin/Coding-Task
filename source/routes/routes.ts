import express from 'express';
import controller from '../controllers/controllers';
const router = express.Router();

router.get('/posts', controller.getPosts);
router.get('/posts/:id', controller.getPost);

export = router;
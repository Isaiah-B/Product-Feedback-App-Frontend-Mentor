import express from 'express';
import { protect } from '../controllers/auth-controller';
import { createComment, createReply, getComment, getComments } from '../controllers/comment-controller';

const router = express.Router();

router.route('/')
  .get(getComments)

router.use(protect);

router.route('/:id')
  .get(getComment)
  .post(createComment);

router.post('/reply/:id', createReply);

export default router;
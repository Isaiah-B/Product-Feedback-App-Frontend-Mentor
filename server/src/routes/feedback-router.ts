import express from 'express';

import { protect } from '../controllers/auth-controller';
import {
  createFeedback,
  deleteFeedback,
  editFeedback,
  getAllFeedback,
  upvoteFeedback
} from '../controllers/feedback-controller';

const router = express.Router();

router.get('/', getAllFeedback);

router.use(protect);

router.post('/', createFeedback);

router.patch('/upvote/:id', upvoteFeedback);

router.route('/:id')
  .patch(editFeedback)
  .delete(deleteFeedback);


export default router;
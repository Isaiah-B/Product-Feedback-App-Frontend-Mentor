import express from 'express';
import { protect } from '../controllers/auth-controller';
import { getUser } from '../controllers/user-controller';

const router = express.Router();

router.get('/', protect, getUser);

export default router;
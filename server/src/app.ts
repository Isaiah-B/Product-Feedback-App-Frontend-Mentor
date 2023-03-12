import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import errorController from './controllers/error-controller';

import feedbackRouter from './routes/feedback-router';
import commentRouter from './routes/comment-router';
import userRouter from './routes/user-router';
import authRouter from './routes/auth-router';

import AppError from './utils/appError';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

app.get('/', (req, res, next) => (res.send('hi :)')));

app.use('/api/v1/feedback', feedbackRouter);
app.use('/api/v1/comment', commentRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/auth', authRouter);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  return next(new AppError(`The route ${req.originalUrl} was not found on the server.`, 404))
});

app.use(errorController);

export default app;
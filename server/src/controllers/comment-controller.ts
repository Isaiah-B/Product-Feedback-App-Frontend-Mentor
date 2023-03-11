import { Request, Response, NextFunction } from 'express';

import Comment from '../models/comment-model';
import Feedback from '../models/feedback-model';

import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';

import { RequestWithUser } from '../types';

export const getComments = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const comments = await Comment.find({});

  return res.status(200).json({
    status: 'success',
    results: comments.length,
    data: comments,
  });
});

export const getComment = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const commentId = req.params.id;
  const comment = await Comment.findById(commentId);

  if (!comment) {
    return next(new AppError('Comment could not be found', 404, 'Resource not found'));
  }

  return res.status(200).json({
    status: 'success',
    data: comment,
  })
})

export const createComment = catchAsync(async (req: RequestWithUser, res: Response, next: NextFunction) => {
  const feedbackId = req.params.id;
  const { content } = req.body;
  const currentUser = req.user;

  const feedback = await Feedback.findById(feedbackId);

  if (!feedback) {
    return next(new AppError('Feedback item could not be found', 404, 'Resource Not Found'));
  }

  const newComment = await Comment.create({
    content,
    user: currentUser,
  });

  feedback.comments.push(newComment._id);
  await feedback.save()

  return res.status(201).json({
    status: 'success',
    data: newComment
  });
});

export const createReply = catchAsync(async (req: RequestWithUser, res: Response, next: NextFunction) => {
  const parentId = req.params.id;
  const { content, replyingTo } = req.body;

  const parentComment = await Comment.findById(parentId);
  const currentUser = req.user;
  
  if (!parentComment) {
    return next(new AppError('Parent comment could not be found', 404, 'Resource not found'));
  }

  const newReply = await Comment.create({
    content,
    replyingTo,
    user: currentUser, 
  });

  parentComment.replies.push(newReply._id);
  await parentComment.save();

  return res.status(201).json({
    status: 'success',
    data: newReply,
  });
});
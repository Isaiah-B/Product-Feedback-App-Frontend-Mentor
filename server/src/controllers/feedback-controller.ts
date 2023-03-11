import { NextFunction, Request, Response } from 'express';

import Feedback from "../models/feedback-model";
import User from '../models/user-model';
import Comment from '../models/comment-model';

import { RequestWithUser } from '../types';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';

export const getAllFeedback = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const feedback = await Feedback.find({});

  return res.status(200).json({
    status: 'success',
    results: feedback.length,
    data: feedback,
  });
});

export const createFeedback = catchAsync(async (req: RequestWithUser, res: Response, next: NextFunction) => {
  const currentUser = req.user;

  const newFeedback = await Feedback.create({
    ...req.body,
    user: currentUser?._id
  });

  if (!newFeedback) {
    return next(new AppError('Feedback could not be created', 400));
  }

  return res.status(201).json({
    status: 'success',
    data: newFeedback,
  });
});

export const editFeedback = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const feedback = await Feedback.findByIdAndUpdate(id, {
    ...req.body,
  }, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    status: 'success',
    data: feedback,
  });
});

export const deleteFeedback = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const feedback = await Feedback.findById(id);

  if (feedback) {
    for (let i = 0; i < feedback.comments.length; i++) {
      await Comment.findByIdAndDelete(feedback.comments[i]);
    }
  }

  await Feedback.findByIdAndDelete(id);

  return res.status(204).json({
    status: 'success',
    data: null,
  });
});

export const upvoteFeedback = catchAsync(async (req: RequestWithUser, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const reqUser = req.user;

  const feedback = await Feedback.findById(id);
  const currentUser = await User.findById(reqUser?._id);

  if (!feedback || !currentUser) {
    return next(new AppError('The feedback or user could not be found', 404));
  }

  // Cast ObjectId to string to allow comparison with currentUser id
  const feedbackId = feedback._id.toString();
  
  if (!currentUser.upvotes.includes(feedbackId)) {
    currentUser.upvotes.push(feedbackId)
    feedback.upvotes += 1;
  } else {
    currentUser.upvotes = currentUser.upvotes.filter((upvoted) => upvoted !== feedbackId);
    feedback.upvotes -= 1;
  }

  await currentUser.save();
  await feedback.save();

  return res.status(200).json({
    status: 'success',
    data: feedback
  });
});

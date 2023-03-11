import { NextFunction, Response } from "express";

import User from "../models/user-model";

import { RequestWithUser } from "../types";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";


export const getUser = catchAsync(async (req: RequestWithUser, res: Response, next: NextFunction) => {
  const reqUser = req.user;

  const userId = reqUser?._id; 
  const user = await User.findById(userId);

  if (!user) {
    return next(new AppError('User could not be found', 404, 'User not found'));
  }

  return res.status(200).json({
    status: 'success',
    data: user,
  });
});
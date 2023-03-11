import { Request, Response, NextFunction } from "express";
import User from "../models/user-model";
import jwt, { JwtPayload } from 'jsonwebtoken';

import { RequestWithUser } from "../types";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";
import decodeToken from "../utils/decodeToken";

export const protect = catchAsync(async (req: RequestWithUser, res: Response, next: NextFunction) => {
  let token;
  let decodedToken;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.slice(7);
    decodedToken = decodeToken(token, next) as JwtPayload;
  }
  
  if (!token || !decodedToken) {
    return next(new AppError('User not authenticated', 401, 'Not authorized'));
  }

  const currentUser = await User.findById(decodedToken.id);
  
  if (!currentUser) {
    return next(new AppError('User could not be found', 404, 'User not found'));
  }
  
  req.user = currentUser;
  return next();
});


export const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { name, username } = req.body;

  const newUser = await User.create({ name, username });

  const jwt_secret = process.env.JWT_SECRET || '';
  const token = jwt.sign({ id: newUser._id }, jwt_secret);

  if (!token) {
    return next(new AppError('There was a problem creating the user', 400));
  }

  return res.status(201).json({
    status: 'success',
    data: {
      token,
      user: newUser,
    },
  });
});

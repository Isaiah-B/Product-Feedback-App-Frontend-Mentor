import { NextFunction } from 'express';

import jwt, { JwtPayload } from 'jsonwebtoken';
import AppError from './appError';

export default function decodeToken(token: string, next: NextFunction) {
  const jwt_secret = process.env.JWT_SECRET;
  
  if (!jwt_secret) {
    return next(new AppError('JWT Secret not found', 404));
  }
  
  const decodedToken = jwt.verify(token, jwt_secret) as JwtPayload;
  return decodedToken;
}
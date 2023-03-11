import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError } from "jsonwebtoken";
import mongoose, { mongo, MongooseError } from "mongoose";

import AppError from "../utils/appError";

function handleCastError(error: mongoose.Error.CastError) {
  const message = `Invalid ${error.path}: ${error.value}`;
  return new AppError(message, 400, 'Resource not Found');
}

function handleJwtError(error: JsonWebTokenError) {
  const message = error.message;
  return new AppError(message, 401, 'Not authorized');
}

function handleDuplicateError(error: any) {
  const key = Object.keys(error.keyValue)[0]; 
  const message = `Duplicate ${key}: ${error.keyValue[key]}`
  return new AppError(message, 400, 'Duplicate username');
};

function sendErrorDev(error: AppError, req: Request, res: Response, next: NextFunction) {
  return res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
    type: error.type,
    stack: error.stack
  });
}

function sendErrorProd(error: AppError, req: Request, res: Response, next: NextFunction) {
  if (!error.isOperational) {
    return res.status(error.statusCode).json({
      title: 'Something went wrong!',
      message: error.message,
    });
  }

  return res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
    type: error.type,
  })
};

export default (error: Error, req: Request, res: Response, next: NextFunction) => {
  let err;

  if (error instanceof AppError) {
    err = error;
  }
  
  else if (error instanceof mongoose.Error.CastError) {
    err = handleCastError(error);
  }

  else if (error instanceof mongo.MongoServerError) {
    if (error.code === 11000) {
      err = handleDuplicateError(error);
    }
  }

  else if (error instanceof JsonWebTokenError) {
    err = handleJwtError(error);
  }
  
  else err = new AppError(error.message || '', 500);
  console.log(err);

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err as AppError, req, res, next);
  } else if (process.env.NODE_ENV === 'production') {
    sendErrorProd(err as AppError, req, res, next);
  }
}
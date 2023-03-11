class AppError extends Error {
  statusCode: number;
  status: string;
  type: string;
  isOperational: boolean;

  constructor(message: string, statusCode: number, type: string = 'Error') {
    super(message);
    
    // Allow use of 'AppError' type
    Object.setPrototypeOf(this, AppError.prototype);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.type = type;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
import { Request } from 'express';
import { UserType} from '../models/user-model';

// Add a user field to express' Request interface
export interface RequestWithUser extends Request {
  user?: UserType,
}
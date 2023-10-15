import jwt from 'jsonwebtoken';
import userModel,{IUser} from '../db/schemas/userSchema';
import { NextFunction, Request, Response } from 'express';

declare module 'express-serve-static-core' {
    interface Request {
      user?: IUser;
    }
  }

const validateToken = (token, authbearertoken) => {
  if (!token.startsWith(authbearertoken)) {
    throw new Error("Invalid bearer token");
  }
};

const getUserFromToken = async (token, AUTHTOKEN) => {
  const extractedToken = token.split(AUTHTOKEN)[1];
  const decoded: any = jwt.verify(extractedToken, AUTHTOKEN);
  return decoded.id;
};

const checkUserRole = (user, accessRole) => {
  if (!accessRole.includes(user.role)) {
    throw new Error("Not authorized");
  }
};

export const authorizeUser = (accessRole: string[] = []) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authbearertoken, AUTHTOKEN } = process.env;

      if (!authbearertoken || !AUTHTOKEN) {
        throw new Error('Required environment variables are not defined.');
      }

      const token = req.headers.token ;

      validateToken(token, authbearertoken);
      const userId = await getUserFromToken(token, AUTHTOKEN);
      const user = await userModel.findById(userId).select('role');

      if (!user) {
        throw new Error("Not a registered user");
      }

      checkUserRole(user, accessRole);

      req.user = user;
      next();
    } catch (error) {
      res.status(error.status === 401 ? 401 : 500).json({ message: error.message });
    }
  };
};

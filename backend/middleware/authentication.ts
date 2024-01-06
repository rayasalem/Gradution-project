import jwt from 'jsonwebtoken';
import userModel, { IUser } from '../db/schemas/userSchema';
import { NextFunction, Request, Response } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: IUser;
  }
}
const validateToken = (token: string, authbearertoken: string) => {
  if (!token.startsWith(authbearertoken)) {
    throw new Error("Invalid bearer token");
  }
};

const getUserFromToken = async (token: string, AUTHTOKEN: string,authbearertoken: string) => {
    const extractedToken = token.split(authbearertoken)[1];
  const decoded: any = jwt.verify(extractedToken, AUTHTOKEN);
  return decoded.id; 
};

const checkUserRole = (user: IUser, accessRole: string[]) => {
  
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

      const token = req.headers.token as string;

      validateToken(token, authbearertoken);
      const userId = await getUserFromToken(token, AUTHTOKEN,authbearertoken);
      const user = await userModel.findById(userId).select('role');

      if (!user) {
        throw new Error("Not a registered user");
      }

      checkUserRole(user, accessRole);

      req.user = user;
      next();
    } catch (error) {
      console.error('JWT Verification Error:', error);
      res.status(500).json({ message: "catch error" });
    }
  };
};

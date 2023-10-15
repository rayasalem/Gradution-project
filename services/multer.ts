import { NextFunction, Request, Response } from "express";
import multer, { Multer } from "multer";
export const fileValidation = {
  image: ['image/png','image/jpeg'],
  pdf: ['application/pdf'],
};
export const handleErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err ? next(Object.assign(new Error("Multer error"), { cause: 400 })) : next();
};

export const myMulter = (customValidation: string[]): Multer =>
  multer({
    fileFilter: (req, file, cb) => {
      customValidation.includes(file.mimetype)
        ? cb(null, true)
        : cb(null, false);
    },
    storage: multer.diskStorage({}),
  });

import { NextFunction ,Request,Response } from "express";
import multer from "multer";

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
    if (err ) {
        next(Object.assign(new Error("Multer error"), { cause: 400}));
      } else {
      next();
    }
  };
export function myMulter(customValidation: string[]) {
  const storage = multer.diskStorage({});

   const fileFilter =(
    req: Request,
    file: Express.Multer.File,
    cb: any
  ):void => {
    if (!customValidation.includes(file.mimetype)) {
        cb("invalid format", false)
    } else {
      cb(null, true);
    }
  }

  const upload = multer({ fileFilter, storage });
  return upload;
}

import { Request, Response, NextFunction } from 'express';

export const validation = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validationArray: any[] = [];
      const methods = ['body', 'params', 'headers', 'query', 'file'];

      methods.forEach((key) => {
        if (schema[key]) {
          const data = req[key as keyof Request];
          const validationResult = schema[key].validate(data, { abortEarly: false });

          if (validationResult?.error) {
            validationArray.push(validationResult.error.details);
          }
        }
      });

      if (validationArray.length > 0) {
        return res.status(400).json({ message: 'Validation error', errors: validationArray });

      }

      next();
    } catch (error) {
      return res.status(500).json({ message: 'Catch error', error });
    }
  };
};

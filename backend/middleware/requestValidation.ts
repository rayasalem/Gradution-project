import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const createCourseSchema = Joi.object({
  title: Joi.string().required().min(3).max(100),
  description: Joi.string().required().min(10).max(500),
  category: Joi.string().required(),
  difficultyLevel: Joi.string().valid('beginner', 'intermediate', 'advanced').required(),
});
export const rateCourseSchema = Joi.object({
  rating: Joi.number().min(1).max(5).required(), 
});
export const editCourseSchema = Joi.object({
  title: Joi.string().min(3).max(100),
  description: Joi.string().min(10).max(500),
  category: Joi.string(),
  difficultyLevel: Joi.string().valid('beginner', 'intermediate', 'advanced'),
});

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

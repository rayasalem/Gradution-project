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
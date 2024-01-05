
import Joi from 'joi';

export const quizTasker = Joi.object({
  userId: Joi.string().required(),
  quizId: Joi.string().required(),
  answers: Joi.array().items( Joi.string().required()),
});
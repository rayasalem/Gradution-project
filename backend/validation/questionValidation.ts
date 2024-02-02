import Joi from 'joi';

 export const createQuestion=Joi.object({
        text: Joi.string().required(),
        type: Joi.string().required(),
        options: Joi.array().items(Joi.string().required() ),
        correctAnswer: Joi.string().required(),
    })

export const updateQuestion = Joi.object({
    text: Joi.string(),
    type: Joi.string(),
    options: Joi.array().items(Joi.string()),
    correctAnswer: Joi.string(),
  })
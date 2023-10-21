import Joi from "joi";

const createQuiz =Joi .object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        duration: Joi.number().optional(),
       
        passingScore: Joi.number().required(),
      })


const updateQuiz = Joi.object({
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    duration: Joi.number().optional(),
    questions: Joi.array().items(Joi.string()).optional(),
    passingScore: Joi.number().optional(),
  })

export {updateQuiz,createQuiz};
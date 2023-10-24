import Joi from 'joi';
export const createBlog={
    body:Joi.object().required().keys({
        title:Joi.string().required().min(3).max(100),
        content:Joi.string().required().min(10),
        topic:Joi.string().required(),
        timeToRead:Joi.number().integer().min(1).required()
    })
}

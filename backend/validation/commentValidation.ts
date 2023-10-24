import Joi from 'joi';
export const createComment={
    body:Joi.object().required().keys({
        text:Joi.string().required(),
    })
}

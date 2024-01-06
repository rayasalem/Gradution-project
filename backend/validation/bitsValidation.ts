import Joi from 'joi';
export const earnBits={
    body:Joi.object().required().keys({
        actionType:Joi.string().required().valid('lesson' , 'codeProject' , 'codeCoach' , 'codeRepo' , 'codeChallenge')
    })
}

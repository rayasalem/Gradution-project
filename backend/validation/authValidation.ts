import Joi from 'joi';

 export const signup ={
    body:Joi.object().required().keys({
        username:Joi.string().min(3).max(15).required().messages({
            'any.required':'please send your name',
            'string.empty':'name is required'
        }),
        email:Joi.string().email().required(),
        password:Joi.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/).required(),
        dateOfBirth:Joi.date().max('now').required()
    })
}

export const signin ={
   body:Joi.object().required().keys({
    email:Joi.string().email().required().messages({
        'any.required':'please send your email'
    }),
    password:Joi.string().required()
   })
  
}
export const sendCode ={
    body:Joi.object().required().keys({
        email:Joi.string().email().required().messages({
            'any.required':'please send your email'
        })
    })

}
export const forgetpassword={
    body:Joi.object().required().keys({
        code:Joi.string().required(),
        email:Joi.string().email().required(),
        newPassword:Joi.string().min(5).max(20).required(),
        
    })
}
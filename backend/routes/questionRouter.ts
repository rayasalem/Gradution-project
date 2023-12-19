import * as questionController from '../controllers/questionController';
import { authorizeUser } from '../middleware/authentication';
import { validation } from '../middleware/requestValidation';
import * as validators from '../validation/questionValidation'; 
import { Router } from 'express';
import { roles } from '../services/roles';
const questionRouter = Router();
questionRouter.post('/createquestion', authorizeUser([roles.admin]), questionController.creatQuestion);

questionRouter.get('/getQuestion',authorizeUser([roles.admin]),questionController.getQuestion);

questionRouter.put('/updateQuestion',authorizeUser([roles.admin]),authorizeUser([roles.admin]), validation(validators.updateQuestion), questionController.updateQuestion);

questionRouter.delete('/deleteQuestion',authorizeUser([roles.admin]),authorizeUser([roles.admin]), questionController.deleteQuestion);

export default questionRouter;
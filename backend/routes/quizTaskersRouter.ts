import * as QuizTakerController from '../controllers/quizTaskersController';
import { authorizeUser } from '../middleware/authentication';
import { validation } from '../middleware/requestValidation';
import * as validators from '../validation/quizTaskersValidation';
import { roles } from '../services/roles';
import { Router } from 'express';

const quizTakerRouter = Router();

quizTakerRouter.post('/createQuizTaker',authorizeUser([roles.admin]),validation(validators.quizTasker), QuizTakerController.createQuizTaker);
quizTakerRouter.get('/getQuizTaker', authorizeUser([roles.admin,roles.user]),QuizTakerController.getQuizTaker);
quizTakerRouter.get('/QuizTakers', authorizeUser([roles.admin]),QuizTakerController.listQuizTakers);
quizTakerRouter.put('/updateQuizTaker',authorizeUser([roles.admin]) ,validation(validators.quizTasker),QuizTakerController.updateQuizTaker);
quizTakerRouter.delete('/deleteQuizTaker', authorizeUser([roles.admin]),QuizTakerController.deleteQuizTaker);

export default quizTakerRouter;
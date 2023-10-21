import * as quizController from '../controllers/quizController';
import { authorizeUser } from '../middleware/authentication';
import { validation } from '../middleware/requestValidation';
import * as validators from '../validation/quizValidation';
import { roles } from '../services/roles';
import { Router } from 'express';

const quizRouter = Router();

quizRouter.post('/createquiz/:courseId', authorizeUser([roles.admin]), validation(validators.createQuiz), quizController.creatQuiz);

quizRouter.get('/getQuiz/:quizId',authorizeUser([roles.admin]), quizController.getQuiz);

quizRouter.put('/updateQuiz/:quizId', authorizeUser([roles.admin]), validation(validators.updateQuiz), quizController.updateQuiz);

quizRouter.delete('/deleteQuiz/:quizId', authorizeUser([roles.admin]), quizController.deleteQuiz);

quizRouter.get('/Quizzes', authorizeUser([roles.admin]),quizController.listQuizzes);

export default quizRouter;
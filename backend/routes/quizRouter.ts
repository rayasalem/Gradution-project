import * as quizController from '../controllers/quizController';
import { authorizeUser } from '../middleware/authentication';
import { validation } from '../middleware/requestValidation';
import * as validators from '../validation/quizValidation';
import { roles } from '../services/roles';
import { Router } from 'express';

const quizRouter = Router();

quizRouter.post('/createquiz/:courseId', authorizeUser([roles.admin]), quizController.creatQuiz);
quizRouter.get('/getQuiz/:quizId',authorizeUser([roles.admin]), quizController.getQuiz);
quizRouter.put('/editQuiz/:quizId', authorizeUser([roles.admin]), validation(validators.updateQuiz), quizController.editQuiz);
quizRouter.delete('/deleteQuiz/:quizId', authorizeUser([roles.admin]), quizController.deleteQuiz);
quizRouter.get('/Quizzes/:courseId', authorizeUser([roles.admin,roles.user]),quizController.listQuizzesInCourse);
quizRouter.get('/questions/:quizId',authorizeUser([roles.admin,roles.user]),quizController.listQuestionsInQuiz);

export default quizRouter;